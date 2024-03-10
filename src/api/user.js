import request from '@/utils/request'

export const getUserInfo = (username) => {
  return request({
    method: 'GET',
    url: `/` + username + `/info`
  })
}
