const Key = require('../models/key.model');
const errorHandler = require('./error-handler');

const auth = (req, res, next) => {
  const token = req.header('auth-token');
  if (!token) return res.status(401).send('Access Denied');

  Key.findOne({ key: token }, 'read write', (err, key) => {
    if (err) return errorHandler.handleError(err);
    if (!key) return res.status(400).send('Invalid Token');

    const { read, write } = key;
    req.read = read;
    req.write = write;
    next();
  });
};

module.exports = auth;
