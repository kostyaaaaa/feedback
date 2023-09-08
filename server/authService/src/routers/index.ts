import { Router } from 'express';
import usersRouter from './usersRouter';
import authRouter from './authRouter';
import placesRouter from './placesRouter';
import { tokenMiddleware } from '../middleware';

const router = Router();

router.use('/users', tokenMiddleware, usersRouter);
router.use('/auth', authRouter);
router.use('/places', tokenMiddleware, placesRouter);

export default router;
