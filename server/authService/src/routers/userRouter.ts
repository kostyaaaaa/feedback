import { Router } from 'express';
import UsersController from '../controllers/usersController';
import { Channel } from 'amqplib';

const initUserRouter = (channel: Channel): Router => {
  const router = Router();
  const usersController = new UsersController(channel);

  router.get('/:id', usersController.getUserById);

  return router;
};
export default initUserRouter;
