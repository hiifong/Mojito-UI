import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useTokenStore = defineStore(
  'token',
  () => {
    const token = ref('')
    const isAdmin = ref(false)

    function getToken() {
      return token
    }

    function setToken(tokenStr) {
      token.value = tokenStr
    }

    return { token, isAdmin, getToken, setToken }
  },
  {
    persist: true
  }
)
