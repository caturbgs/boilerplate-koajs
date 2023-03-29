import { IBody } from "./request";

interface IHttpErrorCode {
    [key: string]: number;
}

interface IErrorCode {
    [key: string]: string;
}

interface IApplicationError {
    type: string,
    message: string,
    httpCode?: number,
    data?: IBody | any,
    expected?: boolean,
}

export { IHttpErrorCode, IErrorCode, IApplicationError };