import request from '@/utils/request'
import type { response } from './response'

interface captcha {
  id: string
  captcha: string
}

export const getCaptcha = () => {
  return request<response<captcha>>({
    method: 'GET',
    url: '/captcha'
  })
}
