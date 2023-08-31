import { ErrorRequestHandler } from 'express';
import { STATUS_CODES } from '../constants';

// global error handler middleware
const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  console.error('Error handler: ', err);
  return res.status(err.code || STATUS_CODES.badRequest).json({
    error: err.name || 'Error',
    message: err.message || 'Internal Server Error',
  });
};

export default errorHandler;
