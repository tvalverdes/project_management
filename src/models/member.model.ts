import { DataTypes } from 'sequelize'
import { sequelize } from '../config/db_connection'
import { Project } from './project.model'
import { Task } from './task.model'

export const memberModel = sequelize.define(
  'member',
  {
    member_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: '123456',
    },
    phone: {
      type: DataTypes.TEXT,
    },
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: -1,
    },
    area_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { paranoid: true, deletedAt: 'destroyTime' }
)

memberModel.hasMany(Project, { foreignKey: 'created_by' })
memberModel.belongsToMany(Task, { through: 'member_task' })
Project.belongsToMany(memberModel, { through: 'project_member' })
