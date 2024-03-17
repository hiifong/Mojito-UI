import request from '@/utils/request.js'

export const getUploadToken = () => {
  return request({
    method: 'GET',
    url: '/upToken'
  })
}
