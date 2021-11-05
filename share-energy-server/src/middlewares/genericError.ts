import { NextFunction, Request, Response } from "express";
import { BaseError } from "../errors";

type Err = {
    status: number;
    message: string;
}

export const genericError = (err: BaseError, req: Request, res: Response, _next: NextFunction) => {
    const error: Err = {
        status: err.httpCode ? err.httpCode : 500,
        message: err.httpCode ? err.message : "Internal Server Error"
    }
    return res.status(error.status).send(err.message);
}