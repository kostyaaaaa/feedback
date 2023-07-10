import { Sequelize } from 'sequelize-typescript';
import * as models from './models';

const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT } = process.env;

const sequelize = new Sequelize({
  database: DB_NAME,
  dialect: 'postgres',
  username: DB_USER,
  password: DB_PASSWORD,
  port: DB_PORT,
  host: DB_HOST,
  models: Object.values(models),
});

sequelize
  .authenticate()
  .then(() => {
    console.log(`Connection to ${DB_NAME} has been established successfully.`);
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });
