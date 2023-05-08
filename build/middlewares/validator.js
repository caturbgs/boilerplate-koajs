"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
        return (ctx, next) => __awaiter(void 0, void 0, void 0, function* () {
            const result = compiledSchema(ctx.query);
            if (Array.isArray(result)) {
                throw new error_handler_1.ApplicationError({
                    message: 'Validation Error',
                    type: error_1.ERROR_CODE.QueryValidationError,
                    data: result
                });
            }
            else {
                yield next();
            }
        });
    },
    body: (schema) => {
        const compiledSchema = v.compile(schema);
        return (ctx, next) => __awaiter(void 0, void 0, void 0, function* () {
            const result = compiledSchema(ctx.request.body);
            if (Array.isArray(result)) {
                throw new error_handler_1.ApplicationError({
                    message: 'Validation Error',
                    type: error_1.ERROR_CODE.BodyValidationError,
                    data: result
                });
            }
            else {
                yield next();
            }
        });
    },
    params: (schema) => {
        const compiledSchema = v.compile(schema);
        return (ctx, next) => __awaiter(void 0, void 0, void 0, function* () {
            const result = compiledSchema(ctx.params);
            if (Array.isArray(result)) {
                throw new error_handler_1.ApplicationError({
                    message: 'Validation Error',
                    type: error_1.ERROR_CODE.ParamsValidationError,
                    data: result
                });
            }
            else {
                yield next();
            }
        });
    },
};
//# sourceMappingURL=validator.js.map