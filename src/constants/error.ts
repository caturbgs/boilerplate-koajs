import { IErrorCode, IHttpErrorCode } from "../types/error";

const ERROR_HTTP_CODE: IHttpErrorCode = {
    QueryValidationError: 400,
    ParamsValidationError: 400,
    BodyValidationError: 400,
    InvalidRequest: 400,
    AuthenticationError: 401,
    InternalServerError: 500,
};

const ERROR_CODE: IErrorCode = {
    QueryValidationError: "QueryValidationError",
    ParamsValidationError: "ParamsValidationError",
    BodyValidationError: "BodyValidationError",
    InvalidRequest: "InvalidRequest",
    AuthenticationError: "AuthenticationError",
    InternalServerError: "InternalServerError",
};

export { ERROR_HTTP_CODE, ERROR_CODE };
