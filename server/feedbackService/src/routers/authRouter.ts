import { Router } from 'express';
import authController from '../controllers/authController';

const initAuthRouter = (): Router => {
  const router = Router();

  router.post('/login', authController.login);
  router.post('/register', authController.register);

  return router;
};

export default initAuthRouter;
