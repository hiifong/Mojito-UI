import request from '@/utils/request'
import { useTokenStore } from '@/stores/token'

export const register = (data) => {
  return request({
    method: 'POST',
    url: '/register',
    data: data
  })
}

export const login = (data) => {
  return request({
    method: 'POST',
    url: '/login',
    data: data
  })
}

export const logout = () => {
  return request({
    method: 'GET',
    url: '/logout'
  })
}

export const getCode = (data) => {
  return request({
    method: 'POST',
    url: '/code',
    data: data
  })
}

export const forgetPassword = (data) => {
  return request({
    method: 'POST',
    url: '/forgetPassword',
    data: data
  })
}

let promiseRT
let isRefreshing = false
export const refreshToken = () => {
  if (isRefreshing) {
    return promiseRT
  }
  isRefreshing = true
  promiseRT = request({
    method: 'POST',
    url: '/refresh_token',
    params: {
      refreshtoken: useTokenStore().token?.refresh_token
    }
  }).finally(() => {
    isRefreshing = false
  })

  return promiseRT
}
