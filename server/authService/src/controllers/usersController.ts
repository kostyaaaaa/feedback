import { NextFunction, Request, Response } from 'express';
import HTTPService from '../services/HTTPService';
import { AxiosError } from 'axios';

class UsersController {
  getCurrentUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { data, status } = await HTTPService.get(`/users/${req.userId}`);
      res.status(status).json(data);
    } catch (err) {
      if (err instanceof AxiosError) {
        next(err.response?.data);
      } else {
        next(err);
      }
    }
  };
}

export default new UsersController();
