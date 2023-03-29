export interface IBody {
    [key: string]: string | number | boolean | string[] | IBody[] | IBody;
}

export interface IResponse {
    status: number;
    message: string;
    result: IBody;
}