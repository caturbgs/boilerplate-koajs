"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = exports.isExpectedError = exports.ApplicationError = void 0;
const error_1 = require("@constants/error");
const logger_1 = require("./logger");
class ApplicationError extends Error {
    constructor(obj) {
        var _a;
        super(obj.message);
        this.type = obj.type;
        this.name = (_a = obj.type) !== null && _a !== void 0 ? _a : obj.message;
        this.httpCode = obj.httpCode || error_1.ERROR_HTTP_CODE[obj.type] || 500;
        this.data = obj.data;
        this.expected = (typeof obj.expected === "undefined") ? true : !!obj.expected;
    }
}
exports.ApplicationError = ApplicationError;
function isExpectedError(err) {
    if (err instanceof ApplicationError) {
        return err.expected;
    }
    return false;
}
exports.isExpectedError = isExpectedError;
function errorHandler(err) {
    if (isExpectedError(err)) {
        logger_1.log.warn(err);
    }
    else {
        logger_1.log.error(err);
    }
}
exports.errorHandler = errorHandler;
//# sourceMappingURL=error_handler.js.map