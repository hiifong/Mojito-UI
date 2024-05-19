import request from '@/utils/request'
import type { response } from './response'

interface captchaID {
  captchaID: string
}

export const getCaptchaID = () => {
  return request<response<captchaID>>({
    method: 'GET',
    url: '/captcha'
  })
}

// 获取图片验证码，刷新验证码需要传入reload参数
export const getCaptchaImage = (id: string, reload: any) => {
  return request({
    method: 'GET',
    url: `/captcha/${id}.png`,
    params: {
      reload: reload
    }
  })
}
