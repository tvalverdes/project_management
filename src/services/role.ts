import { RequestHandler } from 'express'
import { rolModel } from '../models/role.model'
import { CreateRole } from '../types'

export const addRole: RequestHandler = async (req, res) => {
  try {
    const newRole: CreateRole = req.body
    const [role, created] = await rolModel.findOrCreate({
      where: { name: newRole.name, is_deleted: false },
    })
    if (!created) {
      return res.status(400).send({ error: 'Role already exists' })
    }
    return res.status(201).send(role)
  } catch (error) {
    console.log(error)
    return res.status(500).send(error)
  }
}

//PENDING
export const updateRole: RequestHandler = async (req, res) => {
  try {
    const newRole: CreateRole = req.body
    const [role, created] = await rolModel.findOrCreate({
      where: { name: newRole.name },
    })
    if (!created) {
      return res.status(400).send({ error: 'Role already exists' })
    }
    return res.status(201).send(role)
  } catch (error) {
    console.log(error)
    return res.status(500).send(error)
  }
}
