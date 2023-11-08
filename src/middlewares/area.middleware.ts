import { NextFunction, Request, Response } from 'express'
import { body, validationResult } from 'express-validator'

const handleValidationErrors = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }
  return next()
}
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

export const validateAreaId = [
  body('id')
    .exists()
    .withMessage('Area id is missing')
    .isNumeric()
    .withMessage('Area id must be a number'),
  handleValidationErrors,
]
