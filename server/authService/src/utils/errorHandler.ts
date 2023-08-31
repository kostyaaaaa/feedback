import { ErrorRequestHandler } from 'express';
import { STATUS_CODES } from '../constants';

// global error handler middleware
const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  console.error('Error handler: ', err.code, err.message, err.name);
  return res.status(err.code || STATUS_CODES.badRequest).json({
    name: err.name || 'Error',
    message: err.message || 'Internal Server Error',
    code: err.code || STATUS_CODES.badRequest,
  });
};

export default errorHandler;
