import { DataTypes } from 'sequelize'
import { sequelize } from '../config/db_connection'
import { Project } from './project.model'
import { Task } from './task.model'

export const Member = sequelize.define('member', {
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
  email: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  password: {
    type: DataTypes.TEXT,
    allowNull: false,
    defaultValue: '123456',
  },
  role: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: -1,
  },
  area_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
})

Member.hasMany(Project, { foreignKey: 'created_by' })
Member.belongsToMany(Task, { through: 'member_task' })
Project.belongsToMany(Member, { through: 'project_member' })
