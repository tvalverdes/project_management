import { Request, RequestHandler, Response } from 'express'
import { CreateArea, DeleteArea, UpdateArea } from '../types'
import { areaModel } from '../models/area.model'
import { UniqueConstraintError } from 'sequelize'

const areaAttributes = [
  'area_id',
  'name',
  'description',
  'parent_id',
  'phone',
  'email',
]

export const addArea: RequestHandler = async (req: Request, res: Response) => {
  try {
    const data = req.body as CreateArea
    console.log(data)
    const [area, created] = await areaModel.findOrCreate({
      where: data,
    })
    if (!created) {
      return res.status(400).send({ error: 'Area already exists' })
    }
    return res.status(201).send(area)
  } catch (error) {
    console.log(error)
    return res
      .status(500)
      .send({ Error: 'Something went wrong with area creation: ' + error })
  }
}

export const getAreas: RequestHandler = async (_, res: Response) => {
  try {
    const areas = await areaModel.findAll({ attributes: areaAttributes })
    return res.status(200).send(areas)
  } catch (error) {
    console.log(error)
    return res.status(500).send({ Error: 'Something went wrong: ' + error })
  }
}
export const updateArea: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const data = req.body as UpdateArea
    console.log(data)
    const newArea = await areaModel.update(data, {
      where: { area_id: data.id },
    })
    //update returns an array with the number of rows affected on first position
    const found = newArea[0]
    if (!found) {
      return res.status(400).send({ Error: 'Area does not exists' })
    }
    return res.status(200).send(data)
  } catch (error) {
    if (error instanceof UniqueConstraintError) {
      return res.status(400).send({ Error: 'Area already exists' })
    }
    return res
      .status(500)
      .send({ Error: 'An error ocurred while updating the area: ' + error })
  }
}

export const deleteArea: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const { id } = req.body as DeleteArea
    const isDestroyed = await areaModel.destroy({ where: { area_id: id } })
    //returns 0 if no rows were deleted
    if (!isDestroyed) {
      return res.status(400).send({ Error: 'Area does not exists' })
    }
    return res.status(200).send({ message: 'Area deleted' })
  } catch (error) {
    return res
      .status(500)
      .send({ Error: 'An error ocurred while deleting the area: ' + error })
  }
}
/* export const deleteArea: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const { id } = req.body as DeleteArea
    const deletedArea = await areaModel.update(
      { is_deleted: true, parent_id: null },
      { where: { area_id: id } }
    )
    //update returns an array with the number of rows affected on first position
    const found = deletedArea[0]
    if (!found) {
      return res.status(400).send({ Error: 'Area does not exists' })
    }
    return res.status(200).send({ message: 'Area deleted' })
  } catch (error) {
    return res
      .status(500)
      .send({ Error: 'An error ocurred while deleting the area: ' + error })
  }
} */
