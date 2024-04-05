<script setup>
import { reactive, ref } from 'vue'
import { useTokenStore } from '@/stores/token'
import { useRoute, useRouter } from 'vue-router'
import { login } from '@/api/account'
import { getUserInfo } from '@/api/user'
import { useUserStore } from '@/stores/user'
import { getCaptchaID } from '@/api/captcha'

const tokenStore = useTokenStore()
const userStore = useUserStore()
const router = useRouter()
const route = useRoute()

const form = reactive({
  username: '',
  password: '',
  code: '',
  id: ''
})

const GetCaptcha = async () => {
  await getCaptchaID().then((res) => {
    form.id = res.data.data.captchaID
    console.log('captcha id', form.id)
  })
}

GetCaptcha()

const reload = async () => {
  await GetCaptcha()
}

// 登录事件处理
const onSubmit = async () => {
  isLoading.value = true
  // 表单校验
  await formRef.value?.validate().catch((err) => {
    ElMessage.error('表单校验失败...')
    isLoading.value = false
    return new Promise(() => {})
  })

  // 正式发送登录请求
  const data = await login(form).then((res) => {
    if (res.data.code !== 1) {
      ElMessage.error(res.data.msg)
      isLoading.value = false
      throw new Error('登录信息有误')
    }
    return res.data.data
  })

  console.log('data: ', data)
  // 保存token信息
  tokenStore.setToken(data)

  isLoading.value = false

  const token = tokenStore.token

  console.log('token: ', token)

  const info = await getUserInfo().then((res) => {
    if (res.data.code !== 1) {
      ElMessage.error(res.data.msg)
      throw new Error('获取用户信息失败')
    }
    return res.data.data
  })

  console.log('userinfo: ', info)
  userStore.setUserInfo(info.user)
  ElMessage.success('登录成功')
  router.push(route.query.redirect || '/')
}

// 定义表单校验规则
const rules = ref({
  username: [
    { required: true, message: '用户名不能为空', trigger: 'blur' },
    { pattern: /^[A-Za-z0-9]+$/, message: '用户名必须为2-10位的字母', trigger: 'blur' },
    { min: 2, max: 10, message: '用户名必须为2-10位的字母数字组合', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '密码不能为空', trigger: 'blur' },
    { min: 6, max: 18, message: '密码长度需要6~18位', trigger: 'blur' }
  ],
  code: [
    { required: true, message: '验证码不能为空', trigger: 'blur' },
    { len: 6, message: '验证码为6位', trigger: 'blur' }
  ]
})

// 定义是否登录加载中
const isLoading = ref(false)
const formRef = ref('')
</script>
<template>
  <div class="login">
    <el-form
      :model="form"
      :rules="rules"
      ref="formRef"
      label-width="120px"
      label-position="top"
      size="large"
    >
      <h2>登录</h2>
      <el-form-item label="用户名" prop="username">
        <el-input v-model="form.username" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password" type="password" show-password />
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <el-input v-model="form.code" />
      </el-form-item>
      <el-form-item>
        <el-image
          v-if="form.id"
          :src="`https://vlv.lol/api/v1/captcha/${form.id}.png`"
          style="width: 150px; height: 30px"
          lazy
        />
        <el-link type="primary" @click="reload">看不清换一张。 </el-link>
      </el-form-item>
      <el-form-item>
        <el-link type="primary" @click="$router.push({ name: 'register' })"
          >没有账号，去注册？
        </el-link>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit" :loading="isLoading">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style lang="scss" scoped>
.login {
  background-color: #fff;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%);

  .el-form {
    width: 300px;
    background-color: #fff;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 4px 10px gray;

    .el-form-item {
      margin-top: 20px;
    }

    .el-button {
      width: 100%;
    }
  }
}
</style>
