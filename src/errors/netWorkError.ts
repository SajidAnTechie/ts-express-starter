import BaseError from './baseError';
import HttpStatus from 'http-status-codes';

class NetWorkError extends BaseError {
  public readonly code: number;
  public readonly details: string;
  constructor(message: string, details?: string) {
    super(message);
    this.code = HttpStatus.INTERNAL_SERVER_ERROR;
    this.details = details;
    Object.setPrototypeOf(this, NetWorkError.prototype);
  }
}

export default NetWorkError;
