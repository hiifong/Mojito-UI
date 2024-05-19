import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useTokenStore = defineStore('token', () => {
  const token = ref('')

  function set(tokenStr: string) {
    token.value = tokenStr
  }

  return { token, set }
})
