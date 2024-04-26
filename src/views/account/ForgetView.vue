<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getCode, forgetPassword } from '@/api/account'
import { ElMessage } from 'element-plus'

const router = useRouter()
const route = useRoute()

const form = ref({
  username: '',
  password: '',
  email: '',
  code: ''
})

const GetCode = async (data) => {
  isLoading.value = true
  await getCode(data).then((res) => {
    if (res.data.code === 1) {
      ElMessage.success('验证码已发送至' + data.email + '邮箱，请注意查收！')
    } else {
      ElMessage.error(res.data.msg)
    }
  })
  isLoading.value = false
}

// 重置密码事件处理
const onSubmit = async () => {
  isLoading.value = true
  // 表单校验
  await formRef.value?.validate().catch((err) => {
    ElMessage.error('表单校验失败...')
    isLoading.value = false
    return new Promise(() => {})
  })

  // 正式发送重置密码请求
  await forgetPassword(form).then((res) => {
    if (res.data.code !== 1) {
      ElMessage.error(res.data.msg)
      isLoading.value = false
      throw new Error('用户名、邮箱、或验证码有误')
    }
  })

  isLoading.value = false
  ElMessage.success('重置成功')
  router.push(route.query.redirect || { name: 'login' })
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
  email: [
    { required: true, message: '邮箱不能为空', trigger: 'blur' },
    { min: 7, max: 30, message: '邮箱长度需要7~30位', trigger: 'blur' }
  ],
  code: [{ len: 6, message: '验证码为6位', trigger: 'blur' }]
})

// 定义是否重置密码加载中
const isLoading = ref(false)
const formRef = ref('')
</script>
<template>
  <div class="forget">
    <el-form
      :model="form"
      :rules="rules"
      ref="formRef"
      label-width="120px"
      label-position="top"
      size="large"
    >
      <h2>重置密码</h2>
      <el-form-item label="用户名" prop="username">
        <el-input v-model="form.username" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password" type="password" show-password />
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="form.email" />
      </el-form-item>
      <el-form-item label="邮箱验证码" prop="code">
        <el-input v-model="form.code" />
      </el-form-item>
      <el-form-item>
        <el-link type="primary" @click="$router.push({ name: 'register' })"
          >没有账号，去注册？
        </el-link>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="GetCode(form)" :loading="isLoading">获取验证码</el-button>
        <el-button type="danger" @click="onSubmit" :loading="isLoading">重置密码</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style lang="scss" scoped>
.forget {
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
  }
}
</style>
