import request from '@/utils/request.js'

export const createComment = (data) => {
  return request({
    method: 'POST',
    url: '/comment',
    data: data
  })
}

export const updateComment = (data) => {
  return request({
    method: 'PUT',
    url: '/comment',
    data: data
  })
}

export const getComment = (id) => {
  return request({
    method: 'GET',
    url: `/comment/${id}`
  })
}

export const deleteComment = (id) => {
  return request({
    method: 'DELETE',
    url: `/comment/${id}`
  })
}

export const replyComment = (id, data) => {
  return request({
    method: 'POST',
    url: `/comment/${id}/reply`,
    data: data
  })
}
