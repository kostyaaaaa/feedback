import { Router } from 'express';
import initUserRouter from './userRouter';
import initAuthRouter from './authRouter';
import { tokenMiddleware } from '../middleware';

const initRootRouter = (): Router => {
  const router = Router();

  router.use('/user', tokenMiddleware, initUserRouter());
  router.use('/auth', initAuthRouter());

  return router;
};

export default initRootRouter;
