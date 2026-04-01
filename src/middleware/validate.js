const { validationResult, body } = require('express-validator');
const { sendResponse } = require('../utils/response');

const validateRequest = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return sendResponse(res, 400, false, 'Validation failed', errors.array());
  }
  next();
};

const recordValidation = [
  body('amount').isNumeric().withMessage('Amount must be a number'),
  body('type').isIn(['income', 'expense']).withMessage('Type must be income or expense'),
  body('category').notEmpty().withMessage('Category is required'),
  validateRequest
];

module.exports = { recordValidation };