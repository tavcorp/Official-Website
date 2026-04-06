import { body, validationResult } from 'express-validator';

// Validation middleware
export const validateRequest = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    console.log('Validation errors:', errors.array());

    return res.status(400).json({
      success: false,
      errors: errors.array(),
    });
  }

  next();
};


// Register validation
export const registerValidationRules = [
  body('email')
    .isEmail()
    .withMessage('Invalid Email'),

  body('username')
    .isLength({ min: 3 })
    .withMessage('Username must be at least 3 characters long')
    .trim(),

  body('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long'),
];


// Login validation
export const loginValidationRules = [
  body('email')
    .isEmail()
    .withMessage('Invalid Email'),

  body('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long'),
];