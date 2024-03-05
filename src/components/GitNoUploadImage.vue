<script setup>
import { ref } from 'vue'
import * as qiniu from 'qiniu-js'
import { UploadFilled } from '@element-plus/icons-vue'

const multiple = ref(false)
const token = ref('')
let putExtra = {}
let config = {
  //   useCdnDomain: true,
  region: qiniu.region.as0
}

const UploadImage = async (param) => {
  console.log(param)
  const observable = await qiniu.upload(param.file, null, token.value, putExtra, config)
  const observer = {
    next(res) {
      // ...
      console.log(res)
    },
    error(err) {
      // ...
      console.log(err)
    },
    complete(res) {
      // ...
      console.log(res)
    }
  }
  qiniu.getUploadUrl(config, token).then((res) => {
    console.log(res)
  })
  const subscription = observable.subscribe(observer)
  console.log(subscription)
}
</script>
<template>
  <el-upload class="upload" drag :http-request="UploadImage" :multiple="multiple">
    <el-icon class="el-icon--upload"><upload-filled /></el-icon>
    <div class="el-upload__text">Drop file here or <em>click to upload</em></div>
    <template #tip>
      <div class="el-upload__tip">jpg/png files with a size less than 500kb</div>
    </template>
  </el-upload>
</template>

<style scoped>
.upload {
  width: 400px;
  height: 200px;
}
</style>
