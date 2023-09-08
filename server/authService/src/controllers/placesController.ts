import { NextFunction, Request, Response } from 'express';
import HTTPService from '../services/HTTPService';
import { AxiosError } from 'axios';

class PlacesController {
  createPlace = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { data, status } = await HTTPService.post(`/places`, req.body);
      res.status(status).json(data);
    } catch (err) {
      if (err instanceof AxiosError) {
        next(err.response?.data);
      } else {
        next(err);
      }
    }
  };

  getPlaceById = async (req: Request, res: Response, next: NextFunction) => {};

  deletePlaceById = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {};

  updatePlaceById = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {};
}

export default new PlacesController();
