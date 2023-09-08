import { RequestError } from '../errors';
import { STATUS_CODES } from '../constants';
import { Place } from '../models';
import { ICreatePlaceProps } from '../types';
import { UniqueConstraintError, ValidationError } from 'sequelize';

class PlacesService {
  createPlace = async (placeData: ICreatePlaceProps) => {
    try {
      const place = await Place.create({ ...placeData });
      return place;
    } catch (err) {
      if (err instanceof UniqueConstraintError) {
        throw new RequestError(
          err.errors[0].message,
          STATUS_CODES.alreadyExists,
          err.name,
        );
      }
      if (err instanceof ValidationError) {
        throw new RequestError(
          err.errors[0].message,
          STATUS_CODES.badRequest,
          err.name,
        );
      }
      throw err;
    }
  };
}

export default new PlacesService();
