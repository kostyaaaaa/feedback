import { Router } from 'express';
import { bodyMiddleware } from '../middleware';
import authController from '../controllers/authController';

const router = Router();

router.post('/login', bodyMiddleware, authController.login);
router.post('/register', bodyMiddleware, authController.register);

export default router;
