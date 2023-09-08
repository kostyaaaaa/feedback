import { Router } from 'express';
import placesController from '../controllers/placesController';

const router = Router();

router.post('/', placesController.createPlace);

export default router;
