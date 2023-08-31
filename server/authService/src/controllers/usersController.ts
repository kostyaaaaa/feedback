import { NextFunction, Request, Response } from 'express';

class UsersController {
  getUserById = async (req: Request, res: Response, next: NextFunction) => {};
}

export default new UsersController();
