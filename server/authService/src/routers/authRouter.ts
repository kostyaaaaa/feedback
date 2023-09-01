import { Router } from 'express';
import { bodyMiddleware } from '../middleware';
import authController from '../controllers/authController';

const initAuthRouter = (): Router => {
  const router = Router();

  router.post('/login', bodyMiddleware, authController.login);
  router.post('/register', bodyMiddleware, authController.register);

  return router;
};

export default initAuthRouter;
