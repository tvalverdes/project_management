import { body } from 'express-validator'
import { handleValidationErrors } from '../utils/errorHandler'

export const validateMember = [
  body('name')
    .exists()
    .trim()
    .withMessage('Member name is missing')
    .isLength({ min: 4, max: 50 })
    .withMessage('Member name length out of bounds. Min 4, Max 50')
    .isAlpha('es-ES', { ignore: ' ' })
    .withMessage('Area name can not be a number'),
  body('lastname')
    .exists()
    .trim()
    .withMessage('Member lastname is missing')
    .isLength({ min: 4, max: 50 })
    .withMessage('Member lastname length out of bounds. Min 4, Max 50')
    .isAlpha('es-ES', { ignore: ' ' })
    .withMessage('Member lastname can not be a number'),
  body('email').isEmail().withMessage('Email is not valid'),
  body('password')
    .exists()
    .withMessage('Password required')
    .isLength({ min: 8, max: 50 })
    .withMessage('Password length out of bounds. Min 8, Max 50'),
  body('phone')
    .optional()
    .isNumeric()
    .withMessage('Phone must have only numbers'),
  body('role_id')
    .exists()
    .withMessage('Member must have a role')
    .isNumeric()
    .withMessage('Role id must be a number'),
  body('area_id')
    .exists()
    .withMessage('Member must have an area')
    .isNumeric()
    .withMessage('Area id must be a number'),
  handleValidationErrors,
]

export const validateId = [
  body('id')
    .exists()
    .withMessage('Id is missing')
    .isNumeric()
    .withMessage('Id must be a number'),
  handleValidationErrors,
]
