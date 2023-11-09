import { DataTypes } from 'sequelize'
import { sequelize } from '../config/db_connection'
import { memberModel } from './member.model'

export const areaModel = sequelize.define(
  'area',
  {
    area_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
    },
    description: {
      type: DataTypes.TEXT,
    },
    parent_id: {
      type: DataTypes.INTEGER,
    },
    phone: {
      type: DataTypes.TEXT,
    },
    email: {
      type: DataTypes.TEXT,
    },
  },
  { paranoid: true, deletedAt: 'destroyTime' }
)

areaModel.hasMany(memberModel, { foreignKey: 'area_id' })
