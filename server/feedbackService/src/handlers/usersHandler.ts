import { Channel, Message } from 'amqplib';
import { USER_ACTION_TYPES } from '../constants';

class UsersHandler {
  queueName: string;

  constructor(channel: Channel) {
    this.queueName = 'usersQueue';
    channel.assertQueue(this.queueName, {
      durable: false,
    });
    channel.consume(
      this.queueName,
      (msg: Message | null) => {
        if (msg) {
          const parsed = JSON.parse(msg.content.toString());
          switch (parsed.action) {
            case USER_ACTION_TYPES.GET_USER_BY_ID:
              console.log('Consuming GET_USER_BY_ID action', parsed.data);
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

export default UsersHandler;
