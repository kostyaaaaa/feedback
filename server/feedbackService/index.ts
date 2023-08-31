import express, { Express } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import './src/connectDB';
import errorHandler from './src/utils/errorHandler';
import initRootRouter from './src/routers';

dotenv.config();

const app: Express = express();
const port = process.env.FEEDBACK_PORT;

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// initialize app router
app.use('/api', initRootRouter());

// add global error handler
app.use(errorHandler);

// run server
app.listen(port, () => {
  console.log(
    `⚡️[feedback server]: Server is running at http://localhost:${port}`,
  );
});
