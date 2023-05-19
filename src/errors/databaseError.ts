import BaseError from './baseError';
import HttpStatus from 'http-status-codes';

class DatabaseError extends BaseError {
  public readonly code: number;
  public readonly details: string;
  constructor(message: string, details?: string) {
    super(message);
    this.code = HttpStatus.BAD_GATEWAY;
    this.details = details;
    Object.setPrototypeOf(this, DatabaseError.prototype);
  }
}

export default DatabaseError;
