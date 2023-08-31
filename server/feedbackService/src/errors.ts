// this file contains the custom errors

export interface IConnectionError extends Error {
  message: string;
  name: string;
}

export class ConnectionError extends Error implements IConnectionError {
  constructor(message: string, name?: string) {
    super(message);
    this.name = name || 'ConnectionError';
  }
}

export interface IRequestError extends Error {
  message: string;
  code: number;
  name: string;
}
export class RequestError extends Error implements IRequestError {
  code: number;

  constructor(message: string, code: number, name?: string) {
    super(message);
    this.code = code;
    this.name = name || 'RequestError';
  }
}
