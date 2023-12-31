import { DataTypes } from 'sequelize'
import { sequelize } from '../config/db_connection'

export const Project = sequelize.define(
  'project',
  {
    project_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    start_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    ending_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM,
      values: ['PENDING', 'IN_PROGRESS', 'COMPLETED'],
      allowNull: false,
      defaultValue: 'PENDING',
    },
    created_by: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    updated_by: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    is_deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  { paranoid: true, deletedAt: 'destroyTime' }
)

export const createTables = async () => {
  try {
    //await sequelize.drop({ cascade: true })
    await sequelize.sync()
    console.log('Tables created successfully.')
  } catch (error: unknown) {
    throw new Error('Unable to create the tables: ' + error)
  }
}
