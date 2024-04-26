<script setup>
import { reactive, ref } from 'vue'
import dayjs from 'dayjs'
import { getUserInfo, updateUser } from '@/api/user.js'
import UploadAvatar from '@/components/dashboard/UploadAvatar.vue'
import { useUserStore } from '@/stores/user.js'

const userStore = useUserStore()
let form = ref({
  id: 0,
  username: '',
  lowerName: '',
  password: '',
  bio: '',
  avatar: '',
  primaryEmail: '',
  emails: [],
  lastLoginAt: '',
  defaultBranch: '',
  defaultTheme: '',
  previewTheme: '',
  codeTheme: '',
  showCodeRowNumber: false
})
const formRef = ref()

const themes = ref(['light', 'dark'])

const previewThemes = ref(['default', 'github', 'vuepress', 'mk-cute', 'smart-blue', 'cyanosis'])

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

const GetUserInfo = async () => {
  await getUserInfo().then((resp) => {
    const data = resp.data.data.user
    userStore.user = data
    form.value.id = data.id
    form.value.username = data.username
    form.value.lowerName = data.lowerName
    form.value.bio = data.bio
    form.value.avatar = data.avatar
    form.value.emails = data.emails
    form.value.lastLoginAt = data.lastLoginAt
    form.value.defaultBranch = data.setting.defaultBranch
    form.value.defaultTheme = data.setting.defaultTheme
    form.value.previewTheme = data.setting.previewTheme
    form.value.codeTheme = data.setting.codeTheme
    form.value.showCodeRowNumber = data.setting.showCodeRowNumber

    if (data.emails.length > 0) {
      data.emails.forEach((el) => {
        if (el.isPrimary) {
          form.value.primaryEmail = el.email
        }
      })
    }
  })
}

GetUserInfo()

const updateAvatar = (url) => {
  form.avatar = url
}

const onSubmit = async (data) => {
  await updateUser(data)
  await GetUserInfo()
}
const resetForm = () => {
  form.password = ''
  GetUserInfo()
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
        <UploadAvatar :avatar="form.avatar" @updateAvatar="updateAvatar" />
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
      <el-form-item prop="password" label="密码">
        <el-input v-model="form.password" type="password" show-password />
      </el-form-item>
      <el-form-item prop="bio" label="简介">
        <el-input v-model="form.bio" type="textarea" />
      </el-form-item>
      <el-form-item prop="primaryEmail" label="主邮箱">
        <el-select v-model="form.primaryEmail" placeholder="请选择你的主要邮箱">
          <el-option v-for="e in form.emails" :label="e.email" :value="e.email" :key="e.email" />
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
      <el-form-item prop="previewTheme" label="预览主题">
        <el-select v-model="form.previewTheme" placeholder="请选择你的主题">
          <el-option v-for="theme in previewThemes" :label="theme" :value="theme" :key="theme" />
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
        <el-button type="primary" @click="onSubmit(form)">更新</el-button>
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
  }
}
</style>
