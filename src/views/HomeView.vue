<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'
import GitNoArticle from '@/components/GitNoArticle.vue'
import { useTokenStore } from '@/stores/token.js'
import { useUserStore } from '@/stores/user'
import { getUserInfo } from '@/api/user'
import Readme from '@/components/article/Readme.vue'

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
})
</script>

<template>
  <Readme :text="text" />
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
