import { Router } from 'express'
import { addArea, deleteArea, getAreas, updateArea } from '../services/area'
import { validateArea, validateAreaId } from '../middlewares/area.middleware'

const router = Router()

router.get('/', getAreas)
router.post('/', validateArea, addArea)
router.patch('/', validateAreaId, validateArea, updateArea)
router.delete('/', validateAreaId, deleteArea)

export default router
