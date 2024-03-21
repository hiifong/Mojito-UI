import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useTokenStore = defineStore(
  'token',
  () => {
    const token = ref({
      token: '',
      username: ''
    })

    function getToken() {
      return token.value
    }

    function setToken(data) {
      token.value.token = data.token
      token.value.username = data.username
    }

    function isLogin() {
      return !!token.value.token
    }

    return { token, getToken, setToken, isLogin }
  },
  {
    persist: true
  }
)
