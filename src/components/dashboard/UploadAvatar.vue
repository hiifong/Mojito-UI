<script setup>
import { ref } from 'vue'
import * as qiniu from 'qiniu-js'
import { Plus } from '@element-plus/icons-vue'
import { getUploadToken } from '@/api/qiniu.js'

defineProps({
  avatar: String
})

const emits = defineEmits(['updateAvatar'])
const host = 'https://qiniu.hiif.ong/'
const multiple = ref(false)
const token = ref('')
let putExtra = {}
let config = {
  //   useCdnDomain: true,
  region: qiniu.region.as0
}

const UploadImage = async (param) => {
  console.log(param)
  await getUploadToken().then((resp) => {
    token.value = resp.data.data
  })
  const observable = await qiniu.upload(
    param.file,
    'images/' + param.file.name,
    token.value,
    putExtra,
    config
  )
  const observer = {
    next(res) {
      // ...
      console.log('next', res)
    },
    error(err) {
      // ...
      console.log('err', err)
    },
    complete(res) {
      // ...
      console.log('complete', res)
      emits('updateAvatar', host+res.key)
    }
  }
  qiniu.getUploadUrl(config, token.value).then((res) => {
    console.log(res)
  })
  const subscription = observable.subscribe(observer)
  console.log(subscription)
}

const beforeAvatarUpload = (rawFile) => {
  console.log(rawFile.type)
  if (!(rawFile.type !== 'image/jpeg' || rawFile.type !== 'image/png')) {
    ElMessage.error('不允许的图片格式')
    return false
  } else if (rawFile.size / 1024 / 1024 > 2) {
    ElMessage.error('图片大小不能超过2M!')
    return false
  }
  return true
}
</script>
<template>
  <el-upload
    class="avatar"
    action=""
    :http-request="UploadImage"
    :show-file-list="false"
    :before-upload="beforeAvatarUpload"
  >
    <el-avatar v-if="avatar" :src="avatar" fit="fill" class="avatar">
      <img :src="avatar" alt="默认头像" />
    </el-avatar>
    <el-icon v-else class="avatar-icon">
      <Plus />
      上传头像
    </el-icon>
  </el-upload>
</template>

<style scoped>
.avatar {
  width: 200px;
  height: 200px;
  margin: auto;

  .avatar-icon {
    width: 200px;
    height: 200px;
    margin: auto;
  }
}
</style>
