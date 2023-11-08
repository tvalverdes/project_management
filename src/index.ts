import express from 'express'
import { connectToDatabase } from './config/db_connection'
import { createTables } from './models/project.model'
import cors from 'cors'
import memberRouter from './controllers/member.controller'
import roleRouter from './controllers/role.controller'
import areaRouter from './controllers/area.controller'
import { createOnDeleteRole } from './models/role.model'

const app = express()
const port = 3000

app.use(express.json())
app.use(cors())
app.use('/api/v1/member', memberRouter)
app.use('/api/v1/role', roleRouter)
app.use('/api/v1/area', areaRouter)

connectToDatabase()
  .then(async () => {
    await createTables()
  })
  .then(async () => await createOnDeleteRole())
  .then(() => {
    app.listen(port, () =>
      console.log(`Example app listening on port ${port}!`)
    )
  })
  .catch((error) => console.log(error))
