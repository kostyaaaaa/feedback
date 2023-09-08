import { Router } from 'express';
import placesController from '../controllers/placesController';
import { bodyMiddleware } from '../middleware';

const router = Router();

router.post('/', bodyMiddleware, placesController.createPlace);
router.get('/:id', placesController.getPlaceById);
router.delete('/:id', placesController.deletePlaceById);
router.put('/:id', bodyMiddleware, placesController.updatePlaceById);

export default router;
