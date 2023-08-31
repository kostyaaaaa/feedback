import { Request, Response, NextFunction, RequestHandler } from 'express';
import { RequestError } from '../errors';
import { STATUS_CODES } from '../constants';

export const bodyMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  if (Object.keys(req.body).length) {
    next();
  } else {
    throw new RequestError('Request body is empty', STATUS_CODES.badRequest);
  }
};
