import { Request, RequestHandler, Response } from 'express'
import { CreateMember } from '../types'
import { memberModel } from '../models/member.model'
import { ForeignKeyConstraintError } from 'sequelize'

const selectedAttributes = [
  'member_id',
  'name',
  'lastname',
  'email',
  'phone',
  'role_id',
  'area_id',
]

export const getMembers: RequestHandler = async (_, res: Response) => {
  try {
    const members = await memberModel.findAll({
      attributes: selectedAttributes,
    })
    return res.status(200).send(members)
  } catch (error) {
    return res.status(500).send({ Error: 'Something went wrong: ' + error })
  }
}

export const addMember: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const data = req.body as CreateMember
    const [role, created] = await memberModel.findOrCreate({
      where: { email: data.email },
      defaults: data,
    })
    if (!created) {
      return res.status(400).send({ error: 'Email already registered' })
    }
    const { member_id, name } = role.dataValues
    return res.status(201).send({ id: member_id, name })
  } catch (error) {
    if (error instanceof ForeignKeyConstraintError) {
      console.log(error)
      return res.status(400).send({ error: 'Role or Area not found' })
    }
    return res.status(500).send({ Error: 'Something went wrong: ' + error })
  }
}
