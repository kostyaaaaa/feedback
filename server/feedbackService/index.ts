import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import './src/connectDB';
import createMQConsumer from './src/messageBroker/consumer';

dotenv.config();

const consumer = createMQConsumer('userQueue');

consumer();

const app: Express = express();
const port = process.env.FEEDBACK_PORT;

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(
    `⚡️[feedback server]: Server is running at http://localhost:${port}`,
  );
});
