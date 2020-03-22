const { body, validationResult } = require('express-validator');

const validateRanks = (ranks) => {
  if (!Array.isArray(ranks)) {
    throw new Error('The ranks must be of type Array');
  }

  ranks.forEach((rank) => {
    if (typeof rank !== 'number') {
      throw new Error('All items in array must be number');
    }
  });
  return true;
};

const rankingValidationRules = () => [
  body('ranks').notEmpty().custom((value, { req }) => validateRanks(req.body.ranks)),
];

const validateRanking = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  const extractedErrors = [];
  errors.array().map((err) => extractedErrors.push({ [err.param]: err.msg }));

  return res.status(422).json({
    errors: extractedErrors,
  });
};

module.exports = {
  rankingValidationRules,
  validateRanking,
};
