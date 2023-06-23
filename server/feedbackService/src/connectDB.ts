import { Sequelize } from 'sequelize-typescript';

const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT } = process.env;

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  dialect: 'postgres',
  port: DB_PORT,
  host: DB_HOST,
  models: [__dirname + '/models'],
});

sequelize
  .authenticate()
  .then(() => {
    console.log(`Connection to ${DB_NAME} has been established successfully.`);
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });