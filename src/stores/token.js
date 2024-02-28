import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useTokenStore = defineStore(
  'token',
  () => {
    const token = ref('')

    function getToken() {
      return token
    }

    function setToken(tokenStr) {
      token.value = tokenStr
    }

    return { token, getToken, setToken }
  },
  {
    persist: true
  }
)
