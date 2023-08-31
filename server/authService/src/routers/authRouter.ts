import { Router } from 'express';
import { bodyMiddleware } from '../middleware';
import AuthController from '../controllers/authController';
import { Channel } from 'amqplib';

const initAuthRouter = (channel: Channel): Router => {
  const router = Router();
  const authController = new AuthController(channel);

  router.post('/login', bodyMiddleware, authController.login);
  router.post('/register', bodyMiddleware, authController.register);

  return router;
};

export default initAuthRouter;
