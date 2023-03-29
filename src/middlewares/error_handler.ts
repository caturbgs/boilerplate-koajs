import config from "@config/index";
import { ERROR_CODE, ERROR_HTTP_CODE } from "@constants/error";
import { ApplicationError, isExpectedError } from "@helpers/error_handler";
import { Context, Next } from "koa";


export default async function (ctx: Context, next: Next) {
    try {
        await next();

        switch (ctx.status) {
            case 404:
                ctx.status = 404;
                ctx.body = {
                    message: "Route not found",
                    type: "NotFound"
                };
                break;
            case 405:
                ctx.status = 405;
                ctx.body = {
                    message: "Method not allowed",
                    type: "MethodNotAllowed"
                };
                break;

            default:
                break;
        }
    } catch (err) {
        ctx.app.emit("error", err, ctx);

        if (err instanceof ApplicationError) {
            if (isExpectedError(err)) {
                ctx.status = err.httpCode;
                ctx.body = {
                    message: err.message,
                    type: err.name,
                    data: err.data,
                };

                return;
            }
        } else {
            const localError: any = err;
            const errorBody: any = {
                type: ERROR_CODE.InternalServerError,
                message: "Please contact the administrator!",
            };

            if (config.showErrorStack && localError.stack) {
                errorBody.stack = localError.stack.split("\n")[0];
            }

            ctx.status = ERROR_HTTP_CODE.InternalServerError;
            ctx.body = errorBody;
    
            return;
        }
    }
}