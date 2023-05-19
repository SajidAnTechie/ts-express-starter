import BaseError from './baseError';
import HttpStatus from 'http-status-codes';

class TokenError extends BaseError {
  public readonly code: number;
  public readonly details: string;
  constructor(message: string, details?: string) {
    super(message);
    this.code = HttpStatus.UNAUTHORIZED;
    this.details = details;
    Object.setPrototypeOf(this, TokenError.prototype);
  }
}

export default TokenError;
