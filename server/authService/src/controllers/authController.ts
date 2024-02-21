import { AxiosError } from 'axios';
import { NextFunction, Request, Response } from 'express';

import HTTPService from '../services/HTTPService';
import { generateToken } from '../utils/helpers';

class AuthController {
  login = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { data, status } = await HTTPService.post('/auth/login', req.body);
      const token = generateToken({ id: data });
      res.status(status).json(token);
    } catch (err) {
      if (err instanceof AxiosError) {
        next(err.response?.data);
      } else {
        next(err);
      }
    }
  };

  register = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { data, status } = await HTTPService.post(
        '/auth/register',
        req.body,
      );
      const token = generateToken({ id: data });
      res.status(status).json(token);
    } catch (err) {
      if (err instanceof AxiosError) {
        next(err.response?.data);
      } else {
        next(err);
      }
    }
  };
}

export default new AuthController();
