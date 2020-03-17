
const httpStatus = require('http-status');
const logger = require('../utils/logger');

// hanlde not found error
exports.handleNotFound = (req, res, next) => {
  logger.error(`Request resource not found | ${req.method} | ${req.originalUrl}`);
  res.status(httpStatus.NOT_FOUND);
  res.json({
    message: 'Requested resource not found',
  });
  res.end();
};

// handle errors
exports.handleError = (err, req, res, next) => {
  res.status(err.status || httpStatus.INTERNAL_SERVER_ERROR);
  res.json({
    message: err.message,
    extra: err.extra,
    errors: err,
  });
  res.end();
};

exports.handleMongoError = (err, req, res, next) => {
  logger.error(`${err.errmsg} | ${err.code} | ${req.method} | ${req.originalUrl}`);
  res.status(409);
  res.json({
    message: err.errmsg,
    code: err.code,
  });
  res.end();
};
