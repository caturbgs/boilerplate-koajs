import { createLogger } from "@helpers/logger";
import { Context, Next } from "koa";

const httpLog = createLogger("http");

export default async function (ctx: Context, next: Next) {
    const startTime = new Date().getTime();

    await next();

    ctx.res.on("close", () => {
        const duration = Date.now() - startTime;

        const message = `  --> ${ctx.request.method} ${ctx.request.originalUrl} ${ctx.status} ${duration}ms`;

        const logObject = {
            method: ctx.request.method,
            path: ctx.path,
            status: ctx.status,
            duration: duration,
        };


        if (ctx.status >= 500) {
            httpLog.error(logObject, message);
        } else if (ctx.status >= 400) {
            httpLog.warn(logObject, message);
        } else {
            httpLog.info(logObject, message);
        }
    });
};
