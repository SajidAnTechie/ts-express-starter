import logger from '@/utils/logger';
import buildError from '@/utils/buildError';
import HttpStatus from 'http-status-codes';
import { NextFunction, Request, Response } from 'express';
import { ValidationError } from 'joi';

export function notFoundError(req: Request, res: Response, next: NextFunction) {
  res.status(HttpStatus.NOT_FOUND).json({
    error: {
      code: HttpStatus.NOT_FOUND,
      message: HttpStatus.getStatusText(HttpStatus.NOT_FOUND)
    }
  });
}

export function genericErrorHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err.stack) {
    logger.debug(err);
  }
  const error = buildError(err);
  res.status(error.code).json({ error });
}
