import { Router } from 'express';

import initAuthRouter from './authRouter';

const initRootRouter = (): Router => {
  const router = Router();

  router.use('/auth', initAuthRouter());

  return router;
};

export default initRootRouter;
