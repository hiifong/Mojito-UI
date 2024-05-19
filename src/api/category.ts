import request from '@/utils/request'

interface categoryBase {
  uid: number
  parentID: number
  name: string
  description: string
}

interface category extends categoryBase {
  id: number
}

export const updateCategory = (data: category) => {
  return request({
    method: 'PUT',
    url: '/category',
    data: data
  })
}

export const createCategory = (data: categoryBase) => {
  return request({
    method: 'POST',
    url: '/category',
    data: data
  })
}

interface categoryPage {
  uid: number
  page: number
  pageSize: number
}

export const getCategoryList = (data: categoryPage) => {
  return request({
    method: 'POST',
    url: '/category/list',
    data: data
  })
}

export const getCategory = (id: number) => {
  return request({
    method: 'GET',
    url: `/category/${id}`
  })
}

export const deleteCategory = (id: number) => {
  return request({
    method: 'DELETE',
    url: `/category/${id}`
  })
}
