import { Router } from 'express';
import authRouter from './authRouter';
import usersRouter from './usersRouter';
import placesRouter from './placesRouter';

const router = Router();

router.use('/auth', authRouter);
router.use('/users', usersRouter);
router.use('/places', placesRouter);

export default router;
