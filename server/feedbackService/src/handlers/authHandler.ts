import { Channel, Message } from 'amqplib';
import { AUTH_ACTION_TYPES } from '../constants';

class AuthHandler {
  queueName: string;
  constructor(channel: Channel) {
    this.queueName = 'authQueue';
    channel.assertQueue(this.queueName, {
      durable: false,
    });
    channel.consume(
      this.queueName,
      (msg: Message | null) => {
        if (msg) {
          const parsed = JSON.parse(msg.content.toString());
          switch (parsed.action) {
            case AUTH_ACTION_TYPES.REGISTER:
              console.log('Consuming REGISTER action', parsed.data);
              break;
            case AUTH_ACTION_TYPES.LOGIN:
              console.log('Consuming LOGIN action', parsed.data);
              break;
            default:
              break;
          }
        }
      },
      { noAck: true },
    );
  }
}

export default AuthHandler;
