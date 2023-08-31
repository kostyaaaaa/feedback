import amqp, { Connection, Channel } from 'amqplib';
import { ConnectionError } from './errors';

const connectMQ = async (): Promise<Channel> => {
  try {
    console.log('Connecting to RabbitMQ...');

    const connection: Connection = await amqp.connect(process.env.AMQP_URL);
    const channel: Channel = await connection.createChannel();

    console.log('Connected to RabbitMQ');
    return channel;
  } catch (err) {
    if (err instanceof Error) {
      throw new ConnectionError(
        `Unable to connect to RabbitMQ, ${err.message}`,
      );
    } else {
      throw err;
    }
  }
};

export default connectMQ;
