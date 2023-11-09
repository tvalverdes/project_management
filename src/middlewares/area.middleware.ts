
import { body } from 'express-validator'
import { handleValidationErrors } from '../utils/errorHandler'

export const validateArea = [
  body('name')
    .exists()
    .trim()
    .withMessage('Area name is missing')
    .isLength({ min: 4, max: 50 })
    .withMessage('Area name length out of bounds. Min 4, Max 50')
    .isAlpha('es-ES', { ignore: ' ' })
    .withMessage('Area name can not be a number'),
  body('email').optional().isEmail().withMessage('Email is not valid'),
  body('phone')
    .optional()
    .isNumeric()
    .withMessage('Phone must have only numbers'),
  handleValidationErrors,
]
