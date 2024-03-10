import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore(
  'user',
  () => {
    const user = ref({
      id: 0,
      username: '',
      bio: '',
      isAdmin: false
    })

    function getUserInfo() {
      return user.value
    }

    function setUserInfo(info) {
      user.value.id = info.id
      user.value.username = info.username
      user.value.bio = info.bio
      user.value.isAdmin = info.isAdmin
    }

    return { user, getUserInfo, setUserInfo }
  },
  {
    persist: true
  }
)
