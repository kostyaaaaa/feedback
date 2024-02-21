import { NextFunction, Request, Response } from 'express';

import { STATUS_CODES } from '../constants';
import AuthService from '../services/AuthService';

class AuthController {
  login = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = await AuthService.login(req.body);
      res.status(STATUS_CODES.ok).json(userId);
    } catch (err) {
      next(err);
    }
  };

  register = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = await AuthService.register(req.body);
      res.status(STATUS_CODES.created).json(userId);
    } catch (err) {
      next(err);
    }
  };
}

export default new AuthController();
