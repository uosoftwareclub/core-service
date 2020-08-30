const httpStatus = require("http-status");
// const logger = require('../utils/logger');

// hanlde not found error
exports.handleNotFound = (req, res, next) => {
  // logger.error(`${req.method} | 404 | ${req.originalUrl} | Request resource not found`);
  res.status(httpStatus.NOT_FOUND);
  res.json({
    message: "Requested resource not found"
  });
  res.end();
};

// handle errors
exports.handleError = (err, req, res, next) => {
  res.status(err.status || httpStatus.INTERNAL_SERVER_ERROR);
  res.json({
    message: err.message,
    extra: err.extra,
    errors: err
  });
  res.end();
};

exports.handleMongoError = (err, req, res, next) => {
  // logger.error(` ${req.method} | ${err.code} | ${req.originalUrl} | ${err.errmsg}`);
  res.status(409);
  res.json({
    message: err.errmsg,
    code: err.code
  });
  res.end();
};
