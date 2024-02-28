import axios from 'axios'
import { useTokenStore } from '@/stores/token.js'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'

const router = useRouter()
const store = useTokenStore()

const request = axios.create({
  baseURL: import.meta.env.VITE_API_URL
})

// 请求拦截器
request.interceptors.request.use(config => {
  if (!config.headers) {
    config.headers = {}
  }
  config.headers.Authorization = store.token?.access_token

  return config
})

// 响应拦截器
request.interceptors.response.use(
  response => response,
  async error => {
    if (error.response.status === 401) {
      // 刷新token
      const { data } = await refreshToken()
      if (data.success) {
        // 保存新token
        store.setToken(data.content)
        // 重新请求之前的接口,并且把结果返回
        return request(error.config)
      } else {
        // 跳转到 login
        ElMessage.error("刷新Token失败, 需要重新登录才可以!")
        router.push({ name: "login" })
        return
      }
    } else if (error.response.status === 403) {
      ElMessage.error("当前操作权限不足")
      return { data: { code: "123456" } }
    }
    return Promise.reject(error)
  }
)

export default request