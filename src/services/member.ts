import { MemberInterface, CreateMember } from '../types';

export class Member implements MemberInterface {
  name: string
  email: string
  role: number
  is_deleted: boolean

  constructor(name: string, email: string, role: number, is_deleted: boolean) {
    this.name = name
    this.email = email
    this.role = role
    this.is_deleted = is_deleted
  }

	createMember(newMember: CreateMember) {

	}
}
