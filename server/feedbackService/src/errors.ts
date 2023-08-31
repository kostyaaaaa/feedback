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
