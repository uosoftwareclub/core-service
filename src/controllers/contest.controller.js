const Contest = require('../models/contest.model');

exports.status = async (req, res, next) => {
  try {
    return res.json({ message: 'Contest endpoint is working.'})
  } catch (error) {
    next(error)
  }
}