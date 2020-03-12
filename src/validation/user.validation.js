const { body, validationResult } = require('express-validator');
const titles = require('../enums/enums.titles');

/**
 * We want to check the title the client is using is the same as the enums.
 * @param {title} - Title to validate
 * @return {boolean} - True if title is in the titles enum.
 */
const validateTitle = (title) => {
  if (!titles.includes(title)) {
    throw new Error(`The title string must be one of: ${titles}.`);
  }
  return true;
};

/**
 * @returns {Array} - certain express-validator rules.
 */
const userValidationRules = () => [
    body('title').custom( (value, { req }) => validateTitle(req.body.title)),
    body('firstname').notEmpty().withMessage('Must add a first name.'),
    body('lastname').notEmpty().withMessage('Must add a last name.'),
    body('username').notEmpty().withMessage('Added a username')
  ];

  /**
   * Validates the user req.body.
   */
const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  const extractedErrors = [];
  errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }));

  return res.status(422).json({
    errors: extractedErrors
  });
};

module.exports = {
  userValidationRules,
  validate
};

