import { Request, RequestHandler, Response } from 'express'
import { rolModel } from '../models/role.model'
import { DeleteRole, Role, UpdatePermission, UpdateRole } from '../types'
import { sequelize } from '../config/db_connection'

export const addRole: RequestHandler = async (req: Request, res: Response) => {
  try {
    const data = req.body as Role
    console.log(data)
    const [role, created] = await rolModel.findOrCreate({
      where: data,
    })
    if (!created) {
      return res.status(400).send({ error: 'Role already exists' })
    }
    return res.status(201).send(role)
  } catch (error) {
    console.log(error)
    return res.status(500).send({ Error: 'Something went wrong: ' + error })
  }
}

//PENDING
export const updateRole: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const data = req.body as UpdateRole
    const newRole = await rolModel.update(data, {
      where: { role_id: data.id },
    })
    //update returns an array with the number of rows affected on first position
    const found = newRole[0]
    if (!found) {
      return res.status(400).send({ Error: 'Role does not exists' })
    }
    return res.status(200).send(data)
  } catch (error) {
    console.log(error)
    return res
      .status(500)
      .send({ Error: 'An error ocurred while updating the role: ' + error })
  }
}

export const deleteRole: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const data = req.body as DeleteRole
    await rolModel.destroy({
      where: {
        role_id: data.id,
      },
    })

    return res.status(200).send({ message: 'Data deleted successfully' })
  } catch (error) {
    console.log(error)
    return res
      .status(500)
      .send({ Error: 'An error ocurred while updating the role: ' + error })
  }
}
export const updatePermission: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const data = req.body as UpdatePermission
    console.log(data.permission)
    const response = await sequelize.query(
      `UPDATE roles SET permission = 'HOLA' WHERE role_id=${data.id}`
    )
    /* await rolModel.update(
      { permission: sequelize.query(`ARRAY[${data.permission[0]}]::TEXT[]`) },
      {
        where: {
          role_id: data.id,
        },
      }
     )*/
    console.log(response)
    return res
      .status(200)
      .send({ message: 'Permissions modified successfully' })
  } catch (error) {
    console.log(error)
    return res
      .status(500)
      .send({ Error: 'An error ocurred while updating the role: ' + error })
  }
}
