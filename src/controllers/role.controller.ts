import { Router } from 'express'
import { validateRole } from '../middlewares/role.middleware'
import { addRole } from '../services/role'

const router = Router()

router.get('/', (_, res) => res.send('Hello World!'))
router.post('/', validateRole, addRole)

export default router
