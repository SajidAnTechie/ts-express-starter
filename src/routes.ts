import { Request, Response, Router } from 'express';
import userRouter from '@/routes/user.route';

const router = Router();

router.get('/health-check', (req: Request, res: Response) => {
  res.send({
    code: 200,
    message: 'API is running'
  });
});

router.use('/users', userRouter);

export default router;
