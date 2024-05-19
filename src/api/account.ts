import request from '@/utils/request'
import type { response } from './response'

interface registerData {
  id: string
  code: string
  email: string
  username: string
  password: string
}

export const register = (data: registerData) => {
  return request<response<string>>({
    method: 'POST',
    url: '/register',
    data: data
  })
}

interface loginData {
  id: string
  code: string
  username: string
  password: string
}

interface token {
  token: string
}

export const login = (data: loginData) => {
  return request<response<token>>({
    method: 'POST',
    url: '/login',
    data: data
  })
}

export const logout = () => {
  return request<response<string>>({
    method: 'GET',
    url: '/logout'
  })
}

interface codeData {
  username: string
  email: string
}

export const getCode = (data: codeData) => {
  return request<response<string>>({
    method: 'POST',
    url: '/code',
    data: data
  })
}

interface forgetData {
  code: string
  email: string
  username: string
  password: string
}

export const forgetPassword = (data: forgetData) => {
  return request<response<string>>({
    method: 'POST',
    url: '/forgetPassword',
    data: data
  })
}
