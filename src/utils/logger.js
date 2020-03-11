/**
 * Zi Gao
 *
 * Configuration of logger util
 */

const path = require('path');
const dotenv = require('dotenv');
const { createLogger, format, transports } = require('winston');

dotenv.config();

const logDir = process.env.LOG_DIR;
const errLog = path.resolve(logDir, 'error.log');
const combinedLog = path.resolve(logDir, 'combined.log');

const logger = createLogger({
  level: 'verbose',
  format: format.combine(
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    format.splat(),
    format.printf(info => `${info.timestamp} [${info.level}] ${info.message}`),
  ),
});

logger.add(new transports.File({ filename: errLog, level: 'error' }));
logger.add(new transports.File({ filename: combinedLog }));

if (process.env.NODE_ENV !== 'production') {
  logger.add(new transports.Console({
    level: 'debug',
  }));
}

module.exports = logger;
