import { Router } from 'express';

import usersController from '../controllers/usersController';

const initUserRouter = (): Router => {
  const router = Router();

  router.get('/:id', usersController.getUserById);

  return router;
};

export default initUserRouter;
