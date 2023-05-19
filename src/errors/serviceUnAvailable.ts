import BaseError from './baseError';
import HttpStatus from 'http-status-codes';

class ServiceUnAvailable extends BaseError {
  public readonly code: number;
  public readonly details: string;
  constructor(message: string, details?: string) {
    super(message);
    this.code = HttpStatus.SERVICE_UNAVAILABLE;
    this.details = details;
    Object.setPrototypeOf(this, ServiceUnAvailable.prototype);
  }
}

export default ServiceUnAvailable;
