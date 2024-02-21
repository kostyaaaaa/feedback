import { NextFunction, Request, RequestHandler, Response } from 'express';

import { STATUS_CODES } from '../constants';
import { RequestError } from '../errors';

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
