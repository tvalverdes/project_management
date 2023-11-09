import { Router } from 'express'
import { addArea, deleteArea, getAreas, updateArea } from '../services/area'
import { validateArea } from '../middlewares/area.middleware'
import { validateId } from '../middlewares/member.middleware'

const router = Router()

router.get('/', getAreas)
router.post('/', validateArea, addArea)
router.patch('/', validateId, validateArea, updateArea)
router.delete('/', validateId, deleteArea)

export default router
