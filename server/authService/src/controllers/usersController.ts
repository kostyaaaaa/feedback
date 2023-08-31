import { NextFunction, Request, Response } from 'express';
import { STATUS_CODES } from '../constants';

class UsersController {
  getUserById = async (req: Request, res: Response, next: NextFunction) => {
    res.sendStatus(STATUS_CODES.ok);
  };
}

export default UsersController;
