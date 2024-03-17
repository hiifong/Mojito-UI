import request from '@/utils/request'

export const updateUser = (data) => {
  return request({
    method: 'PUT',
    url: '/user',
    data: data
  })
}

export const getUserInfo = (id) => {
  return request({
    method: 'GET',
    url: '/user/info',
    params: {
      id: id
    }
  })
}

export const getUserList = (data) => {
  return request({
    method: 'POST',
    url: '/user/list',
    data: data
  })
}

export const deleteUser = (id) => {
  return request({
    method: 'DELETE',
    url: `/user/${id}`
  })
}