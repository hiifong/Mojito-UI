<script setup>
import { reactive, ref } from 'vue'
import { useUserStore } from '@/stores/user'
import emoji from '@/assets/emoji/emoji'
import { UToast, createObjectURL } from 'undraw-ui'
import { getComment } from '@/api/comment'
import { ElMessage } from 'element-plus'
const user = useUserStore().user

defineProps({
  repoId: Number
})

let form = ref({
  content: '',
  page: 0,
  pageSize: 0,
  parentID: 0,
  repoID: 0,
  uid: user.id
})

const getCommentList = async (id, data) => {
  await getComment(id, data).then((res) => {
    if (res.data.msg !== 1) {
      ElMessage.error('获取评论失败')
    }
  })
}

getCommentList(3, form.value)

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

//排序
const latest = ref(true)
const sorted = (latest) => {
  console.log(latest)
  // latest.value = false
}

let temp_id = 100
// 提交评论事件
const submit = ({ content, parentId, files, finish, reply }) => {
  let str = '提交评论:' + content + ';\t父id: ' + parentId + ';\t图片:' + files + ';\t被回复评论:'
  console.log(str, reply)

  /**
   * 上传文件后端返回图片访问地址，格式以'||'为分割; 如:  '/static/img/program.gif||/static/img/normal.webp'
   */
  let contentImg = files.map((e) => createObjectURL(e)).join('||')

  const comment = {
    id: String((temp_id += 1)),
    parentId: parentId,
    uid: config.user.id,
    address: '来自江苏',
    content: content,
    likes: 0,
    createTime: '1分钟前',
    contentImg: contentImg,
    user: {
      username: config.user.username,
      avatar: config.user.avatar,
      level: 6,
      homeLink: `/${(temp_id += 1)}`
    },
    reply: null
  }
  setTimeout(() => {
    finish(comment)
    UToast({ message: '评论成功!', type: 'info' })
  }, 200)
}

config.comments = [
  {
    id: '1',
    parentId: null,
    uid: '1',
    address: '来自上海',
    content:
      '缘生缘灭，缘起缘落，我在看别人的故事，别人何尝不是在看我的故事?别人在演绎人生，我又何尝不是在这场戏里?谁的眼神沧桑了谁?我的眼神，只是沧桑了自己[喝酒]',
    likes: 2,
    contentImg: 'https://gitee.com/undraw/undraw-ui/raw/master/public/docs/normal.webp',
    createTime: 1709953335000,
    user: {
      username: '落🤍尘',
      avatar:
        'https://static.juzicon.com/avatars/avatar-200602130320-HMR2.jpeg?x-oss-process=image/resize,w_100',
      level: 6,
      homeLink: '/1'
    }
  }
]
</script>

<template>
  <u-comment :config="config" @submit="submit" relative-time>
    <u-comment-nav v-model="latest" @sorted="sorted" />
  </u-comment>
</template>
