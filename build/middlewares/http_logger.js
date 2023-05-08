"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = require("@helpers/logger");
const httpLog = (0, logger_1.createLogger)("http");
async function default_1(ctx, next) {
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
        }
        else if (ctx.status >= 400) {
            httpLog.warn(logObject, message);
        }
        else {
            httpLog.info(logObject, message);
        }
    });
}
exports.default = default_1;
;
//# sourceMappingURL=http_logger.js.map