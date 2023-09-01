import { NextFunction, Request, Response } from 'express';
import { STATUS_CODES } from '../constants';
import UsersService from '../services/usersService';

class UsersController {
  getUserById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { userId } = req.params;
      const user = await UsersService.getUserById(+userId);
      res.status(STATUS_CODES.ok).json(user);
    } catch (err) {
      next(err);
    }
  };
}

export default new UsersController();
