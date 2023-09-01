import { Router } from 'express';
import usersController from '../controllers/usersController';

const router = Router();

router.get('/current', usersController.getCurrentUser);

export default router;
