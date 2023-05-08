"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validator = void 0;
const error_1 = require("@constants/error");
const error_handler_1 = require("@helpers/error_handler");
const fastest_validator_1 = __importDefault(require("fastest-validator"));
const v = new fastest_validator_1.default();
exports.validator = {
    query: (schema) => {
        const compiledSchema = v.compile(schema);
        return async (ctx, next) => {
            const result = compiledSchema(ctx.query);
            if (Array.isArray(result)) {
                throw new error_handler_1.ApplicationError({
                    message: 'Validation Error',
                    type: error_1.ERROR_CODE.QueryValidationError,
                    data: result
                });
            }
            else {
                await next();
            }
        };
    },
    body: (schema) => {
        const compiledSchema = v.compile(schema);
        return async (ctx, next) => {
            const result = compiledSchema(ctx.request.body);
            if (Array.isArray(result)) {
                throw new error_handler_1.ApplicationError({
                    message: 'Validation Error',
                    type: error_1.ERROR_CODE.BodyValidationError,
                    data: result
                });
            }
            else {
                await next();
            }
        };
    },
    params: (schema) => {
        const compiledSchema = v.compile(schema);
        return async (ctx, next) => {
            const result = compiledSchema(ctx.params);
            if (Array.isArray(result)) {
                throw new error_handler_1.ApplicationError({
                    message: 'Validation Error',
                    type: error_1.ERROR_CODE.ParamsValidationError,
                    data: result
                });
            }
            else {
                await next();
            }
        };
    },
};
//# sourceMappingURL=validator.js.map