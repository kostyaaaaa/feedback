import { NextFunction, Request, Response } from 'express';
import { STATUS_CODES } from '../constants';
import PlacesService from '../services/placesService';

class PlacesController {
  createPlace = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await PlacesService.createPlace(req.body);
      res.status(STATUS_CODES.ok).json(user);
    } catch (err) {
      next(err);
    }
  };
}

export default new PlacesController();
