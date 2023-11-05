import express from 'express'
import { connectToDatabase } from './config/db_connection'
import { createTables } from './models/project.model'
const app = express()
const port = 3000

app.get('/', (_, res) => res.send('Hello World!'))

connectToDatabase()
  .then(() => {
    createTables()
  })
  .then(() => {
    app.listen(port, () =>
      console.log(`Example app listening on port ${port}!`)
    )
  })
  .catch((error) => console.log(error))
