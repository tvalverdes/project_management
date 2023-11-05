import { ConnectionError, Sequelize } from 'sequelize'
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_USER } from './config'
export const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:5433/${DB_NAME}`,
  {
    define: {
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
    logging: console.log,
    pool: {
      max: 5,
      min: 0,
      idle: 10000,
      acquire: 30000,
    },
  }
)

export const connectToDatabase = async () => {
  try {
    await sequelize.authenticate()
    console.log('Connection has been established successfully.')
  } catch (error: ConnectionError | unknown) {
    throw new Error('Unable to connect to the database: ' + error)
  }
}
