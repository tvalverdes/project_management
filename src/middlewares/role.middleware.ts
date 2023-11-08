import { NextFunction, Request, Response } from 'express'
import { body, validationResult } from 'express-validator'

export const validateRole = [
  body('name')
    .exists()
    .trim()
    .withMessage('Role name is missing')
    .isLength({ min: 4, max: 50 })
    .withMessage('Role name length out of bounds. Min 4, Max 50')
    .isAlpha('es-ES', { ignore: ' ' })
    .withMessage('Role name can not be a number'),

  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    return next()
  },
]
