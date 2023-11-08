import { Router } from 'express'
import { validateRole } from '../middlewares/role.middleware'
import {
  addRole,
  deleteRole,
  updatePermission,
  updateRole,
} from '../services/role'

const router = Router()

router.get('/', (_, res) => res.send('Hello World!'))
router.post('/', validateRole, addRole)
router.patch('/', validateRole, updateRole)
router.delete('/', deleteRole)
router.put('/permission', updatePermission)

export default router
