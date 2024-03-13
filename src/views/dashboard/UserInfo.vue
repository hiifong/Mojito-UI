<script setup>
import { reactive, ref } from 'vue'
import dayjs from 'dayjs'
import { Plus } from '@element-plus/icons-vue'

// do not use same name with ref
const form = reactive({
  id: 0,
  username: 'hiifong',
  lowerName: 'hiifong',
  bio: "I'm hiifong",
  avatar: 'https://hiif.ong/logo.png',
  primaryEmail: 'i@hiif.ong',
  emails: ['i@hiif.ong', 'hiifog@qq.com', 'hiifong.dev@gamil.com'],
  lastLoginAt: '1710222722',
  defaultBranch: 'main',
  defaultTheme: 'aa',
  codeTheme: 'github',
  showCodeRowNumber: false
})
const formRef = ref()

const themes = ref(['light', 'dark'])

const codeThemes = ref([
  'atom',
  'a11y',
  'github',
  'gradient',
  'kimbie',
  'paraiso',
  'qtcreator',
  'stackoverflow'
])

const onSubmit = () => {
  console.log('submit!')
}
const resetForm = (formEl) => {
  if (!formEl) return
  formEl.resetFields()
}

const handleAvatarSuccess = (response, uploadFile) => {
  form.avatar = URL.createObjectURL(uploadFile.raw)
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
  <div class="user-info">
    <el-form
      :model="form"
      ref="formRef"
      label-width="auto"
      style="max-width: 980px"
      class="user-form"
    >
      <el-form-item prop="avatar">
        <el-upload
          class="avatar"
          action=""
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <el-avatar v-if="form.avatar" :src="form.avatar" class="avatar">
            <img :src="form.avatar" alt="默认头像" />
          </el-avatar>
          <el-icon v-else class="avatar-icon">
            <Plus />
            上传头像
          </el-icon>
        </el-upload>
      </el-form-item>
      <el-form-item prop="id" label="用户ID">
        <el-input v-model="form.id" disabled />
      </el-form-item>
      <el-form-item prop="username" label="用户名">
        <el-input v-model="form.username" />
      </el-form-item>
      <el-form-item prop="lowerName" label="用户名(小写)">
        <el-input v-model="form.lowerName" disabled />
      </el-form-item>
      <el-form-item prop="bio" label="简介">
        <el-input v-model="form.bio" type="textarea" />
      </el-form-item>
      <el-form-item prop="primaryEmail" label="主邮箱">
        <el-select v-model="form.primaryEmail" placeholder="请选择你的主要邮箱">
          <el-option v-for="email in form.emails" :label="email" :value="email" :key="email" />
        </el-select>
      </el-form-item>
      <el-form-item label="最近一次登录">
        {{ dayjs.unix(form.lastLoginAt).format('YYYY-MM-DD HH:mm:ss') }}
      </el-form-item>
      <el-form-item prop="defaultBranch" label="默认分支">
        <el-input v-model="form.defaultBranch" />
      </el-form-item>
      <el-form-item prop="defaultTheme" label="默认主题">
        <el-select v-model="form.defaultTheme" placeholder="请选择你的主题">
          <el-option v-for="theme in themes" :label="theme" :value="theme" :key="theme" />
        </el-select>
      </el-form-item>
      <el-form-item prop="codeTheme" label="代码主题">
        <el-select v-model="form.codeTheme" placeholder="请选择你的代码主题">
          <el-option v-for="theme in codeThemes" :label="theme" :value="theme" :key="theme" />
        </el-select>
      </el-form-item>
      <el-form-item prop="showCodeRowNumber" label="显示代码行号">
        <el-switch v-model="form.showCodeRowNumber" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">更新</el-button>
        <el-button @click="resetForm(formRef)">重置</el-button>
        <el-button type="danger">删除账号</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style lang="scss" scoped>
.user-info {
  margin: 10px auto;

  .user-form {
    margin: auto;

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
  }
}
</style>
