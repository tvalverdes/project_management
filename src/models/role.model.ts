import { DataTypes } from 'sequelize'
import { sequelize } from '../config/db_connection'
import { Permission } from './permission.model'
import { Member } from './member.model'

export const rolModel = sequelize.define('role', {
  role_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    unique: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  description: {
    type: DataTypes.STRING,
  },
  is_deleted: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
})

rolModel.hasMany(Member, { foreignKey: 'role_id' })
rolModel.belongsToMany(Permission, { through: 'role_permission' })
