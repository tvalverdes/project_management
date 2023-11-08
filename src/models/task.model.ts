import { DataTypes } from 'sequelize'
import { sequelize } from '../config/db_connection'

export const Task = sequelize.define('task', {
  task_id: {
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
})
