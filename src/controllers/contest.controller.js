const Contest = require('../models/contest.model');

exports.status = async (req, res, next) => {
  return res.json({ message: 'Contest endpoint is working.' })
}