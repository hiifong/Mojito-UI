import request from '@/utils/request'

export const getCaptchaID = () => {
  return request({
    method: 'GET',
    url: '/captcha'
  })
}

// 获取图片验证码，刷新验证码需要传入reload参数
export const getCaptchaImage = (id, reload) => {
  return request({
    method: 'GET',
    url: `/captcha/${id}.png`,
    params: {
      reload: reload
    }
  })
}
