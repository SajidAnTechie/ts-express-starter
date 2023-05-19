import BaseError from './baseError';
import HttpStatus from 'http-status-codes';

class BadRequestError extends BaseError {
  public readonly code: number;
  public readonly details: string;
  constructor(message: string, details?: string) {
    super(message);
    this.code = HttpStatus.BAD_REQUEST;
    this.details = details;
    Object.setPrototypeOf(this, BadRequestError.prototype);
  }
}

export default BadRequestError;
