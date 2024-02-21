import { Router } from 'express';

import authController from '../controllers/authController';
import { bodyMiddleware } from '../middleware';

const initAuthRouter = (): Router => {
  const router = Router();

  router.post('/login', bodyMiddleware, authController.login);
  router.post('/register', bodyMiddleware, authController.register);

  return router;
};

export default initAuthRouter;
