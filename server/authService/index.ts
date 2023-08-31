import express, { Express } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import initRootRouter from './src/routers';
import errorHandler from './src/utils/errorHandler';
import connectMQ from './src/connectMQ';

dotenv.config();

const app: Express = express();
const port = process.env.AUTH_PORT;

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const startServer = async () => {
  // connect to rabbitMQ
  const channel = await connectMQ();

  // initialize app router
  app.use('/api', initRootRouter(channel));

  // add global error handler
  app.use(errorHandler);

  // run server
  app.listen(port, () => {
    console.log(
      `⚡️[auth server]: Server is running at http://localhost:${port}`,
    );
  });
};

startServer();
