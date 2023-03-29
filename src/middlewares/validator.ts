import { ERROR_CODE } from "@constants/error";
import { ApplicationError } from "@helpers/error_handler";
import Validator, { ValidationSchema } from "fastest-validator";
import { Context, Next } from "koa";


const v = new Validator();

export const validator = {
    query: (schema: ValidationSchema | ValidationSchema[]) => {
        const compiledSchema = v.compile(schema);

        return async (ctx: Context, next: Next) => {
            const result = compiledSchema(ctx.query);

            if (Array.isArray(result)) {
                throw new ApplicationError({
                    message: 'Validation Error',
                    type: ERROR_CODE.QueryValidationError,
                    data: result
                });
            } else {
                await next();
            }
        };
    },
    body: (schema: ValidationSchema | ValidationSchema[]) => {
        const compiledSchema = v.compile(schema);

        return async (ctx: Context, next: Next) => {
            const result = compiledSchema(ctx.request.body);

            if (Array.isArray(result)) {
                throw new ApplicationError({
                    message: 'Validation Error',
                    type: ERROR_CODE.BodyValidationError,
                    data: result
                });
            } else {
                await next();
            }
        };
    },
    params: (schema: ValidationSchema | ValidationSchema[]) => {
        const compiledSchema = v.compile(schema);

        return async (ctx: Context, next: Next) => {
            const result = compiledSchema(ctx.params);

            if (Array.isArray(result)) {
                throw new ApplicationError({
                    message: 'Validation Error',
                    type: ERROR_CODE.ParamsValidationError,
                    data: result
                });
            } else {
                await next();
            }
        };
    },
};
