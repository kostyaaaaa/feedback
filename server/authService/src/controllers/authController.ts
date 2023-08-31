import { NextFunction, Request, Response } from 'express';
import { STATUS_CODES } from '../constants';

class AuthController {
  login = async (req: Request, res: Response, next: NextFunction) => {
    res.sendStatus(STATUS_CODES.ok);
  };

  register = async (req: Request, res: Response, next: NextFunction) => {
    res.sendStatus(STATUS_CODES.created);
  };
}

export default AuthController;
