import appConfig from '@/config/appConfig';
import TokenError from '@/errors/tokenError';
import { NextFunction, Response } from 'express';
import jwt, { JsonWebTokenError } from 'jsonwebtoken';
import BadRequestError from '@/errors/badRequestError';
import { RequestWithUser } from '@/interfaces/express.interface';

const SECRETE_KEY = appConfig.jwtSecreteKey;
export function auth(req: RequestWithUser, res: Response, next: NextFunction) {
  const {
    headers: { authorization }
  } = req;
  if (!authorization) {
    throw new TokenError('No authorization Token');
  }

  const token = authorization.split(' ');

  if (!(token[0] === 'Bearer' && token[1] !== undefined)) {
    throw new TokenError('Access token cannot be empty');
  }
  jwt.verify(
    token[1],
    SECRETE_KEY,
    (err: JsonWebTokenError, decodedToken: Record<string, any>) => {
      if (!err) {
        req.user = decodedToken;
        next();
      }

      if (err.message === 'jwt expired') {
        throw new BadRequestError('Access token expired');
      }

      throw new TokenError(err.message);
    }
  );
}
