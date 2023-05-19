import './env';
import 'express-async-errors';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import express from 'express';
import routes from './routes';
import {
  genericErrorHandler,
  notFoundError
} from './middleware/errorHandler.middleware';
const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(morgan('dev'));

//routes
app.use(process.env.API_BASE_PATH || '/', routes);

//error handles
app.use(genericErrorHandler);
app.use(notFoundError);
export default app;
