import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore(
  'user',
  () => {
    const user = ref({})

    function getUserInfo() {
      return user.value
    }

    function setUserInfo(info) {
      user.value = info
    }

    return { user, getUserInfo, setUserInfo }
  },
  {
    persist: true
  }
)
