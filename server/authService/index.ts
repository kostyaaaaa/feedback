import express, { Express } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import rootRouter from './src/routers';
import errorHandler from './src/utils/errorHandler';

dotenv.config();

const app: Express = express();
const port = process.env.AUTH_PORT;

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// initialize app router
app.use('/api', rootRouter);

// add global error handler
app.use(errorHandler);

// run server
app.listen(port, () => {
  console.log(
    `⚡️[auth server]: Server is running at http://localhost:${port}`,
  );
});
