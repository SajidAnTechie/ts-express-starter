import { Request, Response } from 'express';
import HttpStatus from 'http-status-codes';
import * as userService from '@/services/user.service';

export function find(req: Request, res: Response) {
  const data = userService.find();
  res.status(HttpStatus.OK).json({ data });
}
