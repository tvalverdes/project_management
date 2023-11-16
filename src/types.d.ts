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
  id: number
  name: string
  lastname: string
  email: string
  password: string
  phone?: string
  role_id: number
  area_id: number
}

export type CreateMember = Omit<MemberInterface, 'id'>

export type UpdateMember = Partial<MemberInterface>

export type DeleteMember = Pick<MemberInterface, 'id'>

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
  id: number
  name: string
  description?: string
  parent_id?: number | null
  phone?: string
  email?: string
}

export type CreateArea = Omit<Area, 'id'>

export type UpdateArea = Partial<Area>
export type DeleteArea = Pick<Area, 'id'>
