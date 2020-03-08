const User = require('../models/user.model');

exports.status = async (req, res, next) => {
  return res.json({ message: 'User endpoint is working.' })
}