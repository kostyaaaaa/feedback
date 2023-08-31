import { Router } from 'express';
import initUserRouter from './userRouter';
import initAuthRouter from './authRouter';
import { tokenMiddleware } from '../middleware';
import { Channel } from 'amqplib';

const initRootRouter = (channel: Channel): Router => {
  const router = Router();

  router.use('/user', tokenMiddleware, initUserRouter(channel));
  router.use('/auth', initAuthRouter(channel));

  return router;
};

export default initRootRouter;
