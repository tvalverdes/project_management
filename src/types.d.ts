enum statusType {
  PENDING = 'PENDING',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
}

enum modelType {
  PROJECT = 'PROJECT',
  TASK = 'TASK',
  ROLE = 'ROLE',
  AREA = 'AREA',
}

enum permissionType {
  CREATE = 'CREATE',
  READ = 'READ',
  WRITE = 'WRITE',
  DELETE = 'DELETE',
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

export type Role = {
  name: string
  description: string
  permission: string[]
}

export type UpdateRole = Partial<Role> & {
  id: number
}

export type DeleteRole = {
  id: number
}

export type UpdatePermission = {
  id: number
  permission: string[]
}

export type DeletePermission = Pick<Permission, 'is_deleted'>

export interface Area {
  id: number | null
  name: string
  description?: string
  parent_id?: number
  phone?: string
  email?: string
  is_deleted: boolean
}

export type CreateArea = Omit<Area, 'is_deleted' | 'id'>

export type UpdateArea = Partial<Omit<Area, 'is_deleted'>>
export type DeleteArea = Pick<Area, 'id'>
