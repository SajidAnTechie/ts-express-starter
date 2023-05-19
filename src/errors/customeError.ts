import BaseError from './baseError';

class CustomError extends BaseError {
  constructor(message: string, public code: number, public details?: string) {
    super(message);
    this.code = code;
    this.details = details;
    Object.setPrototypeOf(this, CustomError.prototype);
  }
}

export default CustomError;
