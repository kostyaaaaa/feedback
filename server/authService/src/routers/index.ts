import { Router } from 'express';

import { tokenMiddleware } from '../middleware';
import initAuthRouter from './authRouter';
import initUserRouter from './userRouter';

const initRootRouter = (): Router => {
  const router = Router();

  router.use('/user', tokenMiddleware, initUserRouter());
  router.use('/auth', initAuthRouter());

  return router;
};

export default initRootRouter;
