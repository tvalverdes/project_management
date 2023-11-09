import { DataTypes } from 'sequelize'
import { sequelize } from '../config/db_connection'
import { memberModel } from './member.model'

export const rolModel = sequelize.define(
  'role',
  {
    role_id: {
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
    permission: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
      defaultValue: [''],
    },
  },
  { paranoid: true, deletedAt: 'destroyTime' }
)

rolModel.hasMany(memberModel, { foreignKey: 'role_id' })

export const createOnDeleteRole = async () => {
  await rolModel.findOrCreate({ where: { role_id: -1, name: 'No Role' } })
}

rolModel.addHook('afterDestroy', (instance) => {
  const roleId = instance.getDataValue('id')
  memberModel.update({ role_id: -1 }, { where: { role_id: roleId } })
})
