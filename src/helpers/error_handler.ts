import { ERROR_HTTP_CODE } from "@constants/error";
import { IBody } from "../types/request";
import { log } from "./logger";

interface IApplicationError {
    type: string,
    message: string,
    httpCode?: number,
    data?: IBody,
    expected?: boolean,
}

export class ApplicationError extends Error {
    public type: string;
    public httpCode: number;
    public data?: IBody;
    public expected: boolean;

    constructor(obj: IApplicationError) {
        super(obj.message);
        this.type = obj.type;
        this.name = obj.type ?? obj.message;
        this.httpCode = obj.httpCode || ERROR_HTTP_CODE[obj.type] || 500;
        this.data = obj.data;
        this.expected = (typeof obj.expected === "undefined") ? true : !!obj.expected;
    }
}

export function isExpectedError(err: Error): boolean {
    if (err instanceof ApplicationError) {
        return err.expected;
    }

    return false;
}

export function errorHandler(err: Error): void {
    if (isExpectedError(err)) {
        log.warn(err);
    } else {
        log.error(err);
    }
}
