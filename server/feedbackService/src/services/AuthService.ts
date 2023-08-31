import User from '../models/User';
import bcrypt from 'bcryptjs';
import { RequestError } from '../errors';
import { STATUS_CODES } from '../constants';
import { ILoginParams, IRegisterParams } from '../types';
import { UniqueConstraintError, ValidationError } from 'sequelize';

const bcryptSalt = 4;

class AuthService {
  login = async ({ email, password }: ILoginParams) => {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      throw new RequestError('User not found', STATUS_CODES.notFound);
    }
    // specific case for the seed's admins
    if (user.id < 4) {
      const result = user.password === password;
      if (result) {
        return user.id;
      }
      throw new RequestError('Password is incorrect', STATUS_CODES.badRequest);
    }
    const result = await bcrypt.compare(password, user.password);
    if (result) {
      return user.id;
    }
    throw new RequestError('Password is incorrect', STATUS_CODES.badRequest);
  };

  register = async (userData: IRegisterParams) => {
    try {
      if (userData.role && userData.status) {
        throw new RequestError(
          'Role and Status are not valid fields',
          STATUS_CODES.badRequest,
        );
      }
      const hashedPassword = await bcrypt.hash(userData.password, bcryptSalt);
      const user = await User.create({ ...userData, password: hashedPassword });
      return user.id;
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

export default new AuthService();
