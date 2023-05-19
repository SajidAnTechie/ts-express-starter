import { Router } from 'express';
import { find } from '@/controllers/user.controller';

const route = Router();

route.get('/', find);

export default route;
