import User from '../models/User';
import { RequestError } from '../errors';
import { STATUS_CODES } from '../constants';

class UsersService {
  getUserById = async (id: number) => {
    const user = await User.findOne({ where: { id } });
    if (!user) {
      throw new RequestError('User not found', STATUS_CODES.notFound);
    }
    return user;
  };
}

export default new UsersService();
