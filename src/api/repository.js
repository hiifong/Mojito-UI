import request from '@/utils/request.js'

export const createRepository = (data) => {
  return request({
    method: 'POST',
    url: '/repository',
    data: data
  })
}

export const updateRepository = (data) => {
  return request({
    method: 'PUT',
    url: '/repository',
    data: data
  })
}

export const getRepository = (id) => {
  return request({
    method: 'PUT',
    url: `/repository/id/${id}`
  })
}

export const getRepositoryList = (data) => {
  return request({
    method: 'POST',
    url: '/repository/list',
    data: data
  })
}

export const deleteRepository = (id) => {
  return request({
    method: 'DELETE',
    url: `/repository/${id}`
  })
}

export const getRepositoryHistory = (id) => {
  return request({
    method: 'GET',
    url: `/repository/${id}/history`
  })
}

export const getRepositoryByName = (name) => {
  return request({
    method: 'PUT',
    url: `/repository/${name}`
  })
}

export const updateDefaultBranch = (name,data) => {
  return request({
    method: 'PUT',
    url: `/repository/${name}/branch`,
    data: data
  })
}

export const getBranchList = (name) => {
  return request({
    method: 'GET',
    url: `/repository/${name}/branches`
  })
}