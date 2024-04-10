<script setup>
import { reactive, ref, inject } from 'vue'
import { useUserStore } from '@/stores/user'
import emoji from '@/assets/emoji/emoji'
import { UToast, UCommentScroll } from 'undraw-ui'
import { getComment, createComment } from '@/api/comment'
import { useRoute } from 'vue-router'
import dayjs from 'dayjs'

const route = useRoute()
const user = useUserStore().user
const { repo } = inject('repo')
console.log('repo', repo)
console.log('repo id', repo.id)

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
  showLikes: false
})

let pageNum = ref(2)
let pageSize = ref(1)
// 是否禁用滚动加载评论
const disable = ref(false)
let total = ref(10)

// 加载更多评论
const more = () => {
  console.log('more:', disable.value)
  let form = ref({
    page: pageNum.value,
    pageSize: pageSize.value,
    repoID: parseInt(route.params.id)
  })
  if (pageNum.value <= Math.ceil(total.value / pageSize.value)) {
    setTimeout(() => {
      getCommentList(form.value.repoID, form.value).then((res) => {
        let count = res.count
        let commentList = res.commentList
        console.log('count: ', count)
        console.log('commentList: ', commentList)
        commentList.forEach((el) => {
          config.comments.push(el)
        })
        total.value = count
      })
      pageNum.value++
    }, 200)
  } else {
    disable.value = true
  }
}

const getCommentList = async (id = route.params.id, data) => {
  const result = await getComment(id, data).then((res) => {
    return res.data
  })
  console.log('result', result)
  if (result.code !== 1) {
    ElMessage.error('获取评论失败')
    return
  }
  result.data.commentList.forEach((el) => {
    el.createTime = dayjs.unix(el.createTime)
    el.reply = handleReply(el.reply)
    el.user = handleUser(el.user)
    console.log('ele', el)
  })
  console.log('list', result.data.commentList)
  let count = result.data.count
  let commentList = result.data.commentList
  return { count, commentList }
}

const handleReply = (replys) => {
  let count = 0
  let list = []
  if (replys !== null) {
    replys.forEach((el) => {
      count++
      el.createTime = dayjs.unix(el.createTime)
      el.user = handleUser(el.user)
      list.push(el)
    })
  }
  if (count === 0) {
    return null
  }
  return { count, list }
}

const handleUser = (user) => {
  const id = user.id
  const username = user.username
  const avatar = user.avatar
  return { id, username, avatar }
}

// const firstPageCommentList = async () => {
//   let form = ref({
//     page: pageNum.value,
//     pageSize: pageSize.value,
//     repoID: parseInt(route.params.id)
//   })
//   await getCommentList(form.value.repoID, form.value).then((res) => {
//     let count = res.count
//     let commentList = res.commentList
//     console.log('count: ', count)
//     console.log('commentList: ', commentList)
//     config.comments.push(commentList)
//     total.value = count
//   })
// }

// firstPageCommentList()

// 提交评论事件
const submit = async ({ content, parentId, files, finish, reply }) => {
  let str = '提交评论:' + content + ';\t父id: ' + parentId + ';\t图片:' + files + ';\t被回复评论:'
  console.log(str, reply)
  let form = {
    repoID: parseInt(route.params.id),
    parentID: parseInt(parentId),
    content: content,
    uid: user.id
  }
  const result = await createComment(form).then((res) => {
    return res.data
  })
  console.log('sr', result)
  if (result.code !== 1) {
    ElMessage.error()
    return
  }
  result.data.createTime = dayjs.unix(result.data.createTime)
  result.data.user = handleUser(result.data.user)
  result.data.reply = handleReply(result.data.reply)
  console.log('res', result.data)
  setTimeout(() => {
    finish(result.data)
    UToast({ message: '评论成功!', type: 'info' })
  }, 200)
}
</script>

<template>
  <u-comment-scroll :disable="disable" @more="more">
    <u-comment :config="config" @submit="submit" relative-time> </u-comment>
  </u-comment-scroll>
</template>
