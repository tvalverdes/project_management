enum statusType {
  PENDING = 'PENDING',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
}

export interface Project {
  name: string
  description: string
  start_date: Date
  ending_date: Date
  status: statusType
  created_by: number
  updated_by: number
  is_deleted: boolean
}

export type UpdateProject = Partial<Omit<Project, 'created_by' | 'is_deleted'>>

export type DeleteProject = Pick<Project, 'is_deleted'>

export type CreateProject = Omit<Project, 'is_deleted' | 'status'>

export interface MemberInterface {
  name: string
  email: string
  role: number
  is_deleted: boolean
}

export type CreateMember = Omit<Project, 'is_deleted'>

export type UpdateMember = Partial<Omit<MemberInterface, 'is_deleted'>>

export type DeleteMember = Pick<MemberInterface, 'is_deleted'>

export interface Role {
  name: string
  description: string
  is_deleted: boolean
}

export type CreateRole = Omit<Role, 'is_deleted'>

export type UpdateRole = Partial<Omit<Role, 'is_deleted'>>

export type DeleteRole = Pick<Role, 'is_deleted'>

export interface Permission {
  name: string
  description: string
  is_deleted: boolean
}

export type UpdatePermission = Partial<Omit<Permission, 'is_deleted'>>

export type DeletePermission = Pick<Permission, 'is_deleted'>
