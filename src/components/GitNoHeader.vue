<script setup>
import { ref, computed } from 'vue'
import { useTokenStore } from '@/stores/token'
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()
const tokenStore = useTokenStore()
const isLogin = computed(() => {
  return tokenStore.token?.length > 0
})
let activeIndex = ref('1')
const handleSelect = (key, keyPath) => {
  console.log(key, '=====', keyPath)
  activeIndex.value = key
  console.log('activeIndex: ', activeIndex)
}
const errorHandler = () => true
</script>
<template>
  <el-menu
    :default-active="activeIndex"
    class="gitno-menu"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
  >
    <el-menu-item>
      <img
        @click="$router.push({ name: 'home' })"
        style="width: 80px; height: 40px"
        src="@/assets/logo.svg"
        alt="GitNo logo"
      />
    </el-menu-item>
    <div class="flex-grow" />
    <el-menu-item index="1" @click="$router.push({ name: 'home' })">首页</el-menu-item>
    <el-menu-item index="2" @click="$router.push({ name: 'explore' })">探索</el-menu-item>
    <el-menu-item index="3" @click="$router.push({ name: 'home' })">分类</el-menu-item>
    <el-menu-item index="4" @click="$router.push({ name: 'home' })">话题</el-menu-item>
    <el-menu-item index="5" v-if="!isLogin">
      <el-button color="#5FBDFF" @click="$router.push({ name: 'login' })" round>登录</el-button>
    </el-menu-item>
    <el-menu-item index="6" v-if="!isLogin">
      <el-button color="#AA77FF" @click="$router.push({ name: 'register' })" round>注册</el-button>
    </el-menu-item>
    <el-sub-menu index="7" v-if="isLogin">
      <template #title>
        <el-avatar :size="40" :src="userStore.user.avatar" @error="errorHandler">
          <img src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
        </el-avatar>
      </template>
      <el-menu-item index="7-1" @click="$router.push({ name: 'dashboard' })"
        >Dashboard</el-menu-item
      >
      <el-menu-item index="7-2" @click="$router.push({ name: 'logout' })">退出登录</el-menu-item>
    </el-sub-menu>
    <el-menu-item index="7" v-else>
      <el-avatar :size="40" :src="userStore.user.avatar" @error="errorHandler">
        <img src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
      </el-avatar>
    </el-menu-item>
  </el-menu>
</template>

<style scoped>
.flex-grow {
  flex-grow: 1;
}
.el-menu-item:hover {
  background-color: #fff !important;
}

.el-menu-item:active {
  background-color: #fff !important;
  color: #fff !important;
}

.el-menu-item:focus {
  background-color: #fff !important;
}
</style>
