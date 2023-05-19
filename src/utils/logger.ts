import path from 'path';
import config from '@/config/appConfig';
import { createLogger, transports, format } from 'winston';

// logFormat used for console logging
const logFormat = format.printf((info) => {
  return `${info.timestamp} [${info.level}] [${info.label}]: ${info.message}`;
});

/**
 * Create a new winston logger.
 */
const logger = createLogger({
  format: format.combine(
    format.colorize(),
    format.label({ label: path.basename(require.main.filename) }),
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    logFormat
  ),
  transports: setUpTransport()
});

function setUpTransport() {
  const winstonTransport: any[] = [];
  winstonTransport.push(new transports.Console());

  if (config.appEnv === 'test') {
    winstonTransport.push(
      new transports.File({
        filename: 'logs/error.log',
        level: 'error'
      })
    );
    winstonTransport.push(new transports.File({ filename: 'logs/all.log' }));
  }

  return winstonTransport;
}

export default logger;
