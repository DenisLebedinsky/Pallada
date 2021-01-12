export type Role = 'user' | 'admin'

export interface User {
  username?: string
  email?: string
  firstName?: string
  lastName?: string
  id?: string
  role?: Role
  isActive?: boolean
}

export interface LoginData {
  login: string
  password: string
}

export interface UserStore {
  user: User | null
  userLoading: boolean
}

export enum UserActionsTypes {
  LOGIN_REQUEST = '@@user/LOGIN_REQUEST',
  LOGIN_SUCCESS = '@@user/LOGIN_SUCCESS',
  LOGIN_FAIL = '@@user/LOGIN_FAIL',

  LOGOUT_REQUEST = '@@user/LOGOUT_REQUEST',
  LOGOUT_SUCCESS = '@@user/LOGOUT_SUCCESS',
  LOGOUT_FAIL = '@@user/LOGOUT_FAIL',
}
