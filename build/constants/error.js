"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ERROR_CODE = exports.ERROR_HTTP_CODE = void 0;
const ERROR_HTTP_CODE = {
    QueryValidationError: 400,
    ParamsValidationError: 400,
    BodyValidationError: 400,
    InvalidRequest: 400,
    AuthenticationError: 401,
    InternalServerError: 500,
};
exports.ERROR_HTTP_CODE = ERROR_HTTP_CODE;
const ERROR_CODE = {
    QueryValidationError: "QueryValidationError",
    ParamsValidationError: "ParamsValidationError",
    BodyValidationError: "BodyValidationError",
    InvalidRequest: "InvalidRequest",
    AuthenticationError: "AuthenticationError",
    InternalServerError: "InternalServerError",
};
exports.ERROR_CODE = ERROR_CODE;
//# sourceMappingURL=error.js.map