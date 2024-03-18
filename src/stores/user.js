import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore(
  'user',
  () => {
    const user = ref({
      setting: {
        defaultBranch: 'main',
        defaultTheme: 'light',
        previewTheme: 'default',
        codeTheme: 'atom',
        showCodeRowNumber: true
      }
    })

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
