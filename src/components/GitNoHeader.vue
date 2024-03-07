<script setup>
import { ref } from 'vue'
const activeIndex = ref('1')
const handleSelect = (key, keyPath) => {
  console.log(key, keyPath)
}
const errorHandler = () => true
</script>
<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
  >
    <el-menu-item index="0">
      <img style="width: 50px" src="https://hiif.ong/logo.png" alt="Element logo" />
    </el-menu-item>
    <div class="flex-grow" />
    <el-menu-item index="1">首页</el-menu-item>
    <el-menu-item index="2" @click="$router.push({ name: 'login' })">登录</el-menu-item>
    <el-menu-item index="3" @click="$router.push({ name: 'register' })">注册</el-menu-item>
    <el-sub-menu index="4">
      <template #title>
        <el-avatar :size="40" src="https://hiif.ong/logo.png" @error="errorHandler">
          <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png" />
        </el-avatar>
      </template>
      <el-menu-item index="4-1" @click="$router.push({ name: 'dashboard' })">Dashboard</el-menu-item>
      <el-menu-item index="4-2" @click="">退出登录</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<style scoped>
.flex-grow {
  flex-grow: 1;
}
</style>
