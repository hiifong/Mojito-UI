<script setup>
import { ref } from 'vue'
import { useTokenStore } from '@/stores/token.js'
import { useRoute, useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import { login } from '@/api/account.js'

const store = useTokenStore()
const router = useRouter()
const route = useRoute()

const form = ref({
  username: '',
  password: ''
})

// 登录事件处理
const onSubmit = async () => {
  isLoading.value = true
  // 表单校验
  await formRef.value?.validate().catch((err) => {
    ElMessage.error("表单校验失败...")
    isLoading.value = false
    return new Promise(() => {})
  })

  // 正式发送登录请求
  const data = await login(form).then((res) => {
    if (!res.data.success) {
      ElMessage.error("登录信息有误!")
      isLoading.value = false
      throw new Error("登录信息有误")
    }
    return res.data
  })

  console.log(data)
  // 保存token信息
  store.setToken(data.content)

  isLoading.value = false

  ElMessage.success("登录成功!")

  router.push(route.query.redirect || "/")
}

// 定义表单校验规则
const rules = ref({
  username: [
    { required: true, message: "用户名不能为空", trigger: "blur" },
    { pattern: /^[A-Za-z0-9]+$/, message: "用户名必须为2-10位的字母", trigger: "blur" },
    { min: 2, max: 10, message: "用户名必须为2-10位的字母数字组合", trigger: "blur"}
  ],
  password: [
    { required: true, message: "密码不能为空", trigger: "blur" },
    { min: 6, max: 18, message: "密码长度需要6~18位", trigger: "blur" },
  ],
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
    box-shadow: 0px 4px 10px gray;

    .el-form-item {
      margin-top: 20px;
    }

    .el-button {
      width: 100%;
      margin-top: 30px;
    }
  }
}
</style>
