class BaseError extends Error {
  constructor(message: string, public details?: string, public code?: number) {
    super(message);
    this.details = details;
    this.code = code;
    Object.setPrototypeOf(this, BaseError.prototype);
  }
}

export default BaseError;
