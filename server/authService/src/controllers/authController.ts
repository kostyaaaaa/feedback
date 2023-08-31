import { NextFunction, Request, Response } from 'express';
import { Channel } from 'amqplib';
import { STATUS_CODES, AUTH_ACTION_TYPES } from '../constants';
import { IChannel } from '../types/interfaces';

class AuthController {
  channel: IChannel;

  constructor(channel: Channel) {
    this.channel = {
      sendToQueue: (msg: string) =>
        channel.sendToQueue('authQueue', Buffer.from(msg)),
    };
  }

  login = async (req: Request, res: Response, next: NextFunction) => {
    const message = {
      action: AUTH_ACTION_TYPES.LOGIN,
      data: req.body,
    };
    this.channel.sendToQueue(JSON.stringify(message));
    res.sendStatus(STATUS_CODES.ok);
  };

  register = async (req: Request, res: Response, next: NextFunction) => {
    const message = {
      action: AUTH_ACTION_TYPES.REGISTER,
      data: req.body,
    };
    this.channel.sendToQueue(JSON.stringify(message));
    res.sendStatus(STATUS_CODES.created);
  };
}

export default AuthController;
