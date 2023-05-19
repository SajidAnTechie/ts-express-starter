import Joi from 'joi';
import { NextFunction, Request, Response } from 'express';
import { validate } from '@/middleware/validate.middleware';

const createUserSchema = Joi.object().keys({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string()
    .email({ tlds: { allow: ['com'] } })
    .required(),
  password: Joi.string().required()
});

export function validateCreate(
  req: Request,
  res: Response,
  next: NextFunction
) {
  return validate(req.body, createUserSchema).then(() => next());
}
