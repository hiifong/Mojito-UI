<script setup>
import { reactive, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { register } from '@/api/account'
import { getCaptchaID } from '@/api/captcha'

const api = import.meta.env.VITE_API_URL

const router = useRouter()
const route = useRoute()

const form = reactive({
  username: '',
  email: '',
  password: '',
  id: '',
  code: ''
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

// 注册事件处理
const onSubmit = async () => {
  isLoading.value = true
  // 表单校验
  await formRef.value?.validate().catch((err) => {
    ElMessage.error('表单校验失败...')
    isLoading.value = false
    return new Promise(() => {})
  })

  // 正式发送注册请求
  const data = await register(form).then((res) => {
    if (res.data.code !== 1) {
      ElMessage.error(res.data.msg)
      isLoading.value = false
      throw new Error('注册信息有误')
    }
    return res.data
  })

  console.log('response:', data)

  isLoading.value = false

  await router.push(route.query.redirect || '/login')
}

// 定义表单校验规则
const rules = ref({
  username: [
    { required: true, message: '用户名不能为空', trigger: 'blur' },
    { pattern: /^[A-Za-z0-9]+$/, message: '用户名必须为2-10位的字母', trigger: 'blur' },
    { min: 2, max: 10, message: '用户名必须为2-10位的字母数字组合', trigger: 'blur' }
  ],
  email: [
    { required: true, message: '邮箱不能为空', trigger: 'blur' },
    { min: 2, max: 30, message: '邮箱长度必须在2-20位', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '密码不能为空', trigger: 'blur' },
    { min: 8, max: 18, message: '密码长度需要8~18位', trigger: 'blur' }
  ],
  code: [
    { required: true, message: '验证码不能为空', trigger: 'blur' },
    { len: 6, message: '验证码为6位', trigger: 'blur' }
  ]
})

// 定义是否注册加载中
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
      <h2>注册</h2>
      <el-form-item label="用户名" prop="username">
        <el-input v-model="form.username" />
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="form.email" />
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
          :src="`${api}/captcha/${form.id}.png`"
          style="width: 150px; height: 30px"
          lazy
        />
        <el-link type="primary" @click="reload">看不清换一张。 </el-link>
      </el-form-item>
      <el-form-item>
        <el-link type="primary" @click="$router.push({ name: 'login' })"
          >已有账号，去登录？
        </el-link>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit" :loading="isLoading">注册</el-button>
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
