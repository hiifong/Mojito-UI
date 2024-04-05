import { logout } from '@/api/account'
import router from '@/router'
import { useTokenStore } from '@/stores/token.js'
import { useUserStore } from '@/stores/user.js'

const tokenStore = useTokenStore()
const userStore = useUserStore()

export const Logout = async () => {
  await logout()
  await tokenStore.setToken({})
  await userStore.setUserInfo({})
  await router.push({ name: 'login' })
}
