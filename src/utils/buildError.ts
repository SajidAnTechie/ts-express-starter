import BaseError from '@/errors/baseError';
import HttpStatus from 'http-status-codes';
function buildError(err: any) {
  if (err.isJoi || err instanceof SyntaxError) {
    return {
      code: HttpStatus.BAD_REQUEST,
      message: HttpStatus.getStatusText(HttpStatus.BAD_REQUEST),
      details:
        err.details &&
        err.details.map((error: any) => {
          return {
            message: error.message,
            param: error.path
          };
        })
    };
  }

  if (err instanceof BaseError) {
    const code = err.code || HttpStatus.BAD_REQUEST;
    return {
      code,
      message: err.message,
      details: err.details || ''
    };
  }
  return {
    code: HttpStatus.INTERNAL_SERVER_ERROR,
    message: HttpStatus.getStatusText(HttpStatus.INTERNAL_SERVER_ERROR),
    details: ''
  };
}

export default buildError;
