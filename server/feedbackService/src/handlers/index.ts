import { Channel } from 'amqplib';
import UsersHandler from './usersHandler';
import AuthHandler from './authHandler';

const initRootHandler = (channel: Channel) => {
  new UsersHandler(channel);
  new AuthHandler(channel);
};

export default initRootHandler;
