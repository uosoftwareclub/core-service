const User = require('../models/user.model');

exports.status = async (req, res, next) => {
  try {
    return res.json({ message: 'User endpoint is working.'})
  } catch (error) {
    next(error)
  }
}