import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useTokenStore = defineStore(
  'token',
  () => {
    const token = ref()

    function setToken(data) {
      token.value = data?.token || ''
    }

    function isLogin() {
      return token.value !== ''
    }

    return { token, setToken, isLogin }
  },
  {
    persist: true
  }
)
