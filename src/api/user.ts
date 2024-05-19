import request from '@/utils/request'
import { type response } from './response'

interface userInfo {
  id: number
  username: string
  password: string
  primaryEmail: string
  avatar: string
  bio: string
  codeTheme: string
  defaultBranch: string
  defaultTheme: string
  disable: boolean
  previewTheme: string
  showCodeRowNumber: boolean
}

export const updateUser = (data: userInfo) => {
  return request<response<string>>({
    url: '/user',
    method: 'POST',
    data: data
  })
}

export const getUserInfo = (id: number) => {
  return request({
    url: '/user/info',
    method: 'GET',
    params: {
      id: id
    }
  })
}

interface userPage {
  page: number
  pageSize: number
}
export const getUserList = (data: userPage) => {
  return request({
    url: '/user/list',
    method: 'POST',
    data: data
  })
}

export const deleteUser = (id: number) => {
  return request({
    url: `/user/${id}`,
    method: 'DELETE'
  })
}
