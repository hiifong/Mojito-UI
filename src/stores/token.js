import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useTokenStore = defineStore(
  'token',
  () => {
    const token = ref()

    function setToken(data) {
      token.value = data.token
    }

    function isLogin() {
      if (token.value !== '') {
        return true
      } else {
        return false
      }
    }

    return { token, setToken, isLogin }
  },
  {
    persist: true
  }
)
