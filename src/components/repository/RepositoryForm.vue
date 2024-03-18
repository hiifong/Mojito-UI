<script setup>
import { ref } from 'vue'

const form = ref({})
</script>

<template>
  <div class="repository-form">
    <el-form :model="form" label-width="auto" style="max-width: 980px" class="user-form">
      <el-form-item prop="username" label="用户名">
        <el-input v-model="form.username" />
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped>
.repository-form {
}
</style>
