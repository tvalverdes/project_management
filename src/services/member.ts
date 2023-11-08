/* import { RequestHandler } from 'express'
import { CreateMember } from '../types'


export const addMember: RequestHandler = async (req: Request, res: Response) => {
  try {
    const data = req.body as CreateMember
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
} */
