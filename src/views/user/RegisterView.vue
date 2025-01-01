<script lang="ts" setup>
import { ref,reactive } from 'vue'
import { ElMessage, type FormInstance, type FormRules } from 'element-plus'
import { useRouter } from 'vue-router'
import { register, type registerReq } from '@/api/account'

import logo from '@/assets/image/logo.svg'
import githubIcon from '@/assets/image/github.png'
import googleIcon from '@/assets/image/google.png'

const router = useRouter()

const formRef = ref<FormInstance>()
const form = ref({
  username: '',
  email: '',
  password: '',
  agreement: false
})

const rules = reactive<FormRules>({
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  email: [
    { required: true, message: '请输入邮箱', trigger: 'blur' },
    { type: 'email', message: '请输入正确的邮箱格式', trigger: 'blur' }
  ],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
  agreement: [{ type: 'enum', enum: [true], message: '请同意服务条款', trigger: 'change' }]
})

const handleSignUp = async () => {
  if (!formRef.value) return
  await formRef.value.validate((valid) => {
    if (valid) {
      register(form.value as registerReq).then(res => {
        if (res.data.code === 1) {
            ElMessage({
              message: res.data.msg,
              type: 'success'
            })
        }
      })
    }
  })
}

const goToLogin = () => {
  router.push('/login')
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50">
    <div class="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">

      <div class="text-center">
        <img class="mx-auto h-12 w-auto" :src="logo" alt="Materio">
        <h2 class="mt-6 text-3xl font-bold text-gray-900">Adventure starts here 🚀</h2>
        <p class="mt-2 text-sm text-gray-600">Make your app management easy and fun!</p>
      </div>

      <el-form
        ref="formRef"
        :model="form"
        :rules="rules"
        class="mt-8 space-y-6"
      >
        <el-form-item prop="username">
          <el-input
            v-model="form.username"
            placeholder="Username"
          />
        </el-form-item>

        <el-form-item prop="email">
          <el-input
            v-model="form.email"
            placeholder="Email"
          />
        </el-form-item>

        <el-form-item prop="password">
          <el-input
            v-model="form.password"
            type="password"
            placeholder="Password"
            show-password
          />
        </el-form-item>

        <el-form-item prop="agreement">
          <el-checkbox v-model="form.agreement">
            I agree to
            <a href="#" class="text-purple-600 hover:text-purple-500">privacy policy & terms</a>
          </el-checkbox>
        </el-form-item>

        <div>
          <el-button
            type="primary"
            class="w-full"
            :disabled="!form.agreement"
            @click="handleSignUp"
          >
            Sign up
          </el-button>
        </div>
      </el-form>

      <div class="text-center text-sm">
        <p class="text-gray-600">
          Already have an account?
          <a
            class="text-purple-600 hover:text-purple-500 cursor-pointer"
            @click="goToLogin"
          >
            Sign in instead
          </a>
        </p>
      </div>

      <div class="divider">or</div>

      <div class="mt-6">
        <div class="mt-6 grid grid-cols-2 gap-3">
          <button class="btn">
            <img :src="githubIcon" alt="github" class="w-5 h-5">
          </button>
          <button class="btn">
            <img :src="googleIcon" alt="google" class="w-5 h-5">
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>
