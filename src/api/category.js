import request from '@/utils/request.js'

export const updateCategory = (data) => {
  return request({
    method: 'PUT',
    url: '/category',
    data: data
  })
}

export const createCategory = (data) => {
  return request({
    method: 'POST',
    url: '/category',
    data: data
  })
}

export const getCategoryList = (data) => {
  return request({
    method: 'POST',
    url: '/category/list',
    data: data
  })
}

export const getCategory = (id) => {
  return request({
    method: 'POST',
    url: `/category/${id}`
  })
}

export const deleteCategory = (id) => {
  return request({
    method: 'POST',
    url: `/category/${id}`
  })
}