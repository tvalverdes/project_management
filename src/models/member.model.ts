import { DataTypes } from 'sequelize'
import { sequelize } from '../config/db_connection'
import { Project } from './project.model'

export const Member = sequelize.define('member', {
  member_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    unique: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  is_deleted: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
})

Member.hasMany(Project, { foreignKey: 'created_by' })
Project.belongsToMany(Member, { through: 'project_member' })
