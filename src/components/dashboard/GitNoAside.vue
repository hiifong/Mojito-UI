<script setup>
import { isCollapse } from '@/layout/isCollapse'
import {
  CollectionTag,
  Comment,
  Delete,
  Edit,
  Management,
  Notebook,
  Plus,
  Promotion,
  Setting,
  UserFilled
} from '@element-plus/icons-vue'
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()

const handleSelect = (index, indexPath, item, routeResult) => {
  console.log(index)
}
const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}
</script>

<template>
  <el-aside>
    <el-scrollbar>
      <div class="logo" align="center">
        <img
          src="@/assets/logo.svg"
          alt="GitNo Logo"
          style="width: 90px; height: 40px"
          @click="$router.push({ name: 'home' })"
        />
      </div>
      <el-menu
        default-active="1"
        class="aside-menu"
        background-color="#eee"
        :collapse="isCollapse"
        @select="handleSelect"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-menu-item index="1" @click="$router.push({ name: 'dashboard' })">
          <el-icon>
            <setting />
          </el-icon>
          <template #title>概览</template>
        </el-menu-item>
        <el-menu-item index="2" @click="$router.push({ name: 'repository' })">
          <el-icon>
            <Notebook />
          </el-icon>
          <template #title> 版本库管理 </template>
        </el-menu-item>
        <el-menu-item index="3" @click="$router.push({ name: 'category' })">
          <el-icon>
            <CollectionTag />
          </el-icon>
          <template #title> 分类管理 </template>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon>
            <Promotion />
          </el-icon>
          <template #title> 话题管理 </template>
        </el-menu-item>
        <el-menu-item index="5" @click="$router.push({ name: 'comment' })">
          <el-icon>
            <Comment />
          </el-icon>
          <template #title>评论管理</template>
        </el-menu-item>
        <el-menu-item index="6" @click="$router.push({ name: 'user-info' })">
          <el-icon>
            <UserFilled />
          </el-icon>
          <template #title>个人中心</template>
        </el-menu-item>
        <el-menu-item
          index="7"
          v-if="userStore.user.isAdmin"
          @click="$router.push({ name: 'user-list' })"
        >
          <el-icon>
            <Management />
          </el-icon>
          <template #title>用户管理</template>
        </el-menu-item>
      </el-menu>
    </el-scrollbar>
  </el-aside>
</template>

<style>
.el-aside {
  background-color: #eee;
  height: 100vh;
  width: auto;
  border-right: 1px solid #eee;
}

.logo {
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
