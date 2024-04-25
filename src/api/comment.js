import request from '@/utils/request'

export const createComment = (data) => {
  return request({
    method: 'POST',
    url: '/comment',
    data: data
  })
}

export const updateComment = (id, data) => {
  return request({
    method: 'PUT',
    url: `/comment/${id}`,
    data: data
  })
}

export const getCommentById = (id) => {
  return request({
    method: 'GET',
    url: `/comment/${id}`
  })
}

export const getComment = (id, data) => {
  return request({
    method: 'POST',
    url: `/comment/${id}`,
    data: data
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

export const commentList = (data) => {
  return request({
    method: 'POST',
    url: '/comment/list',
    data: data
  })
}
