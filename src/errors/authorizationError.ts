import BaseError from './baseError';
import HttpStatus from 'http-status-codes';

class AuthorizationError extends BaseError {
  public readonly code: number;
  public readonly details: string;
  constructor(message: string, details: string) {
    super(message);
    this.code = HttpStatus.FORBIDDEN;
    this.details = details;
    Object.setPrototypeOf(this, AuthorizationError.prototype);
  }
}

export default AuthorizationError;
