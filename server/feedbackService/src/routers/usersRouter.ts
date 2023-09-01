import { Router } from 'express';
import usersController from '../controllers/usersController';

const router = Router();

router.get('/:userId', usersController.getUserById);

export default router;
