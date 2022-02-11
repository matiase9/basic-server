import { NextFunction, Request, Response } from 'express';
import * as httpStatus from 'http-status';
import { HTTP_STATUS } from '../constants/http-status.constants';
import { GeneralError } from '../utils/error.util';
// handle not found errors
export const notFound = (req, res, next) => {
  res.status(httpStatus.NOT_FOUND);
  res.json({
    message: 'Requested resource not found',
  });
  res.end();
};
// handle internal server errors
export const internalServerError = (err, req, res, next) => {
  res.status(err.status || httpStatus.INTERNAL_SERVER_ERROR);
  res.json({
    message: err.message,
    extra: err.extra,
    errors: err,
  });
  res.end();
};
export const catchError = (ftn: (rq: Request, rs: Response) => Promise<any>) => {
  return (req: Request, res: Response, next: NextFunction) => {
    return ftn(req, res).catch((err: GeneralError | any) => {
      // logger is better
      console.log('error', err);
      next(err);
    });
  };
};
export const errorHandler = (err: GeneralError | any, req: Request, res: Response, next: NextFunction) => {
  const statusCode: number = err instanceof GeneralError ? err.statusCode : HTTP_STATUS.INTERNAL_SERVER_ERROR;
  console.log(err);
  res.status(statusCode).json({
    status: HTTP_STATUS[statusCode] || HTTP_STATUS[HTTP_STATUS.INTERNAL_SERVER_ERROR],
    messsage: err.message || HTTP_STATUS[`${statusCode}_MESSAGE`],
  });
};
export const throwBusinessError = (message: any = '') => {
  throw new GeneralError(HTTP_STATUS.BUSINESS_ERROR, message);
};
export const throwDBError = (message: any = '') => {
  throw new GeneralError(HTTP_STATUS.DB_ERROR, message);
};
