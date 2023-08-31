import { Router } from 'express';
import UsersController from '../controllers/usersController';

const initUserRouter = (): Router => {
  const router = Router();
  const usersController = new UsersController();

  router.get('/:id', usersController.getUserById);

  return router;
};

export default initUserRouter;
