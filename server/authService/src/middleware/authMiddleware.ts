import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

import { STATUS_CODES } from '../constants';
import { RequestError } from '../errors';

interface IDecoded {
  id: string;
}

export const tokenMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  try {
    if (req.headers.authorization) {
      const token = req.headers.authorization.split('Bearer ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
      req.userId = (decoded as IDecoded).id;
      next();
    } else {
      throw new Error('Unauthorized, please provide valid access token');
    }
  } catch (err) {
    if (err instanceof Error) {
      throw new RequestError(err.message, STATUS_CODES.unauthorized, err.name);
    }
    throw err;
  }
};
