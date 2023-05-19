import app from './app';
import config from '@/config/appConfig';
import logger from './utils/logger';

const port: number = config.port || 3001;
const server = app.listen(port, () =>
  logger.info(`Server started at http://localhost:${port}${config.apiBaseUrl}`)
);

// Catch unhandled rejections
process.on('unhandledRejection', (err: Error) => {
  logger.error(`${err.message}`);
  //close the server
  server.close(() => process.exit(1));
});

// Catch uncaught exceptions
process.on('uncaughtException', (err) => {
  logger.error('Uncaught exception');
  logger.error(err.stack);

  server.close(() => process.exit(1));
});
