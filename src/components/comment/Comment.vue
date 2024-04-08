<script setup>
import { reactive, ref, inject } from 'vue'
import { useUserStore } from '@/stores/user'
import emoji from '@/assets/emoji/emoji'
import { UToast } from 'undraw-ui'
import { getComment, createComment } from '@/api/comment'
import { ElMessage } from 'element-plus'
import { useRoute } from 'vue-router'

const route = useRoute()
const user = useUserStore().user
const repo = inject('repo')
let form = ref({
  content: '',
  page: 1,
  pageSize: 10,
  parentID: 0,
  repoID: 3,
  uid: user.id
})

const config = reactive({
  user: {
    id: user.id,
    username: user.username,
    avatar: user.avatar
  },
  emoji: emoji,
  comments: [],
  showLevel: false,
  showHomeLink: false,
  showAddress: false,
  showLikes: false,
  total: 10
})

const getCommentList = async (id = route.params.id, data) => {
  form.value.uid = 0
  const result = await getComment(id, data).then((res) => {
    return res.data
  })
  console.log('result', result)
  if (result.code !== 1) {
    ElMessage.error('获取评论失败')
    return
  }
  form.value.uid = user.id
  result.data.commentList.forEach((element) => {
    console.log('ele', element)
    element.reply = {
      total: 10,
      list: element.reply
    }
  })
  console.log('list', result.data.commentList)
  config.comments = result.data.commentList
}

console.log('repo id', repo.id)
getCommentList(repo.value.id, form.value)

//排序
const latest = ref(true)
const sorted = (latest) => {
  console.log(latest)
  // latest.value = false
}

let temp_id = 100
// 提交评论事件
const submit = async ({ content, parentId, files, finish, reply }) => {
  let str = '提交评论:' + content + ';\t父id: ' + parentId + ';\t图片:' + files + ';\t被回复评论:'
  console.log(str, reply)
  form.value.content = content
  form.value.parentId = parseInt(parentId)
  const result = await createComment(form.value).then((res) => {
    return res.data
  })
  console.log('sr', result)
  if (result.code !== 1) {
    ElMessage.error()
    return
  }
  form.value.content = ''
  form.value.parentID = 0
  setTimeout(() => {
    finish()
    getCommentList(repo.value.id, form.value)
    UToast({ message: '评论成功!', type: 'info' })
  }, 200)
}
</script>

<template>
  <u-comment :config="config" @submit="submit" relative-time> </u-comment>
</template>
