import { Router } from 'express';
import usersRouter from './usersRouter';
import authRouter from './authRouter';
import { tokenMiddleware } from '../middleware';

const router = Router();

router.use('/user', tokenMiddleware, usersRouter);
router.use('/auth', authRouter);

export default router;
