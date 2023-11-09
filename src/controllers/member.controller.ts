import { Router } from 'express'
import { addMember, getMembers } from '../services/member'
import { validateId, validateMember } from '../middlewares/member.middleware'

const router = Router()

router.get('/', getMembers)
router.post('/', validateMember, addMember)
router.patch('/', validateId)
router.delete('/', (_, res) => res.send('Hello World!'))

export default router
