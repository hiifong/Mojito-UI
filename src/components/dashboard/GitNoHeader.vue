<script setup>
import { ref } from 'vue'
import { Expand, Fold } from '@element-plus/icons-vue'
import { ArrowRight } from '@element-plus/icons-vue'
import { isCollapse } from '@/layout/isCollapse'
import { useUserStore } from '@/stores/user'
import { logout } from '@/api/account'
import { useTokenStore } from '@/stores/token'

const tokenStore = useTokenStore()
const userStore = useUserStore()
const activeIndex = ref('1')
const handleSelect = (key, keyPath) => {
  console.log(key, keyPath)
}

const onSubmit = async () => {
  await logout()
  await tokenStore.setToken({})
  this.$router.push({name: 'login'})
}

const errorHandler = () => {}
</script>
<template>
  <el-header>
    <div class="left">
      <!-- 图标 -->
      <el-icon @click="isCollapse = !isCollapse">
        <Expand v-show="isCollapse" />
        <Fold v-show="!isCollapse" />
      </el-icon>
      <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item
          v-for="(item, index) in $route.matched"
          :key="index"
          :to="{ path: item.path }"
        >
          {{ item.meta.title }}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div class="right">
      <el-menu
        :default-active="activeIndex"
        class="right-menu"
        background-color="#eee"
        mode="horizontal"
        :ellipsis="false"
        @select="handleSelect"
      >
        <el-sub-menu index="1">
          <template #title>
            <el-avatar :size="40" :src="userStore.user.avatar" @error="errorHandler">
              <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png" />
            </el-avatar>
          </template>
          <el-menu-item index="1-1" @click="$router.push({ name: 'home' })">首页</el-menu-item>
          <el-menu-item index="1-1" @click="onSubmit">退出登录</el-menu-item>
        </el-sub-menu>
      </el-menu>
    </div>
  </el-header>
</template>

<style scoped>
.el-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #eee;
}

.left {
  display: flex;
  align-items: center;
}

.el-breadcrumb {
  margin-left: 20px;
}
</style>
