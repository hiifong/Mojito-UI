import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

interface Token {
  token: string
}

export const useTokenStore = defineStore(
  'token',
  () => {
    const Token = ref<Token>({
      token: ''
    })

    const token = computed(() => Token.value.token)

    function setToken(token: string) {
      Token.value.token = token
    }

    return { token, setToken }
  },
  {
    persist: true
  }
)
