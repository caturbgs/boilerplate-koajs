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
const index_1 = __importDefault(require("@config/index"));
const error_1 = require("@constants/error");
const error_handler_1 = require("@helpers/error_handler");
function default_1(ctx, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield next();
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
        }
        catch (err) {
            ctx.app.emit("error", err, ctx);
            if (err instanceof error_handler_1.ApplicationError) {
                if ((0, error_handler_1.isExpectedError)(err)) {
                    ctx.status = err.httpCode;
                    ctx.body = {
                        message: err.message,
                        type: err.name,
                        data: err.data,
                    };
                    return;
                }
            }
            else {
                const localError = err;
                const errorBody = {
                    type: error_1.ERROR_CODE.InternalServerError,
                    message: "Please contact the administrator!",
                };
                if (index_1.default.showErrorStack && localError.stack) {
                    errorBody.stack = localError.stack.split("\n")[0];
                }
                ctx.status = error_1.ERROR_HTTP_CODE.InternalServerError;
                ctx.body = errorBody;
                return;
            }
        }
    });
}
exports.default = default_1;
//# sourceMappingURL=error_handler.js.map