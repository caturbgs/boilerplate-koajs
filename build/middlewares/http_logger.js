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
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = require("@helpers/logger");
const httpLog = (0, logger_1.createLogger)("http");
function default_1(ctx, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const startTime = new Date().getTime();
        yield next();
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
            }
            else if (ctx.status >= 400) {
                httpLog.warn(logObject, message);
            }
            else {
                httpLog.info(logObject, message);
            }
        });
    });
}
exports.default = default_1;
;
//# sourceMappingURL=http_logger.js.map