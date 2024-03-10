<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'
import GitNoArticle from '@/components/GitNoArticle.vue'
import { useTokenStore } from '@/stores/token.js'
import { useUserStore } from '@/stores/user'
import { getUserInfo } from '@/api/user'

const tokenStore = useTokenStore()
const userStore = useUserStore()

const total = ref(10000)
const text = ref('')

onMounted(async () => {
  console.log('start==>')
  axios
    .get('https://raw.githubusercontent.com/imzbf/md-editor-v3/develop/README.md')
    .then(function (resp) {
      console.log('==> data:', resp.data)
      text.value = resp.data
    })
    .catch(function (err) {
      console.log('error:', err)
    })

  const token = tokenStore.getToken()

  console.log('token: ', token)
  console.log('username: ', token.username)

  const data = await getUserInfo(token.username).then((res) => {
    if (res.data.code !== 1) {
      ElMessage.error(res.data.msg)
      throw new Error('获取用户信息失败')
    }
    return res.data.data
  })

  console.log('userinfo: ', data)
  userStore.setUserInfo(data.user)
})
</script>

<template>
  <GitNoArticle :text="text" />
  <el-pagination
    :default-page-size="10"
    :pager-count="5"
    layout="prev, pager, next"
    :total="total"
  />
</template>

<style scoped>
.el-pagination {
  margin: auto;
  width: 280px;
}
</style>
