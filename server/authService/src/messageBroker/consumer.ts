import amqp, { Message, Connection } from 'amqplib/callback_api';

const createMQConsumer = (queueName: string) => {
  console.log('Connecting to RabbitMQ...');
  return () => {
    amqp.connect(
      process.env.AMQP_URL,
      (errorConnect: Error, connection: Connection) => {
        if (errorConnect) {
          throw errorConnect;
        }

        connection.createChannel((errChan, chan) => {
          if (errChan) {
            throw errChan;
          }

          console.log('Connected to RabbitMQ');
          chan.assertQueue(queueName, { durable: true });
          chan.consume(
            queueName,
            (msg: Message | null) => {
              if (msg) {
                const parsed = JSON.parse(msg.content.toString());
                switch (parsed.action) {
                  case 'REGISTER':
                    console.log('Consuming REGISTER action', parsed.data);
                    break;
                  case 'LOGIN':
                    console.log('Consuming LOGIN action', parsed.data);
                    break;
                  default:
                    break;
                }
              }
            },
            { noAck: true },
          );
        });
      },
    );
  };
};

export default createMQConsumer;
