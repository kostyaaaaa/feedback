import { NextFunction, Request, Response } from 'express';
import { Channel } from 'amqplib';
import { STATUS_CODES, USER_ACTION_TYPES } from '../constants';
import { IChannel } from '../types/interfaces';

class UsersController {
  channel: IChannel;

  constructor(channel: Channel) {
    this.channel = {
      sendToQueue: (msg: string) =>
        channel.sendToQueue('usersQueue', Buffer.from(msg)),
    };
  }

  getUserById = async (req: Request, res: Response, next: NextFunction) => {
    const message = {
      action: USER_ACTION_TYPES.GET_USER_BY_ID,
      data: req.params.id,
    };
    this.channel.sendToQueue(JSON.stringify(message));
    res.sendStatus(STATUS_CODES.ok);
  };
}

export default UsersController;
