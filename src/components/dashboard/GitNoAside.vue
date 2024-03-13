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
        @open="handleOpen"
        @close="handleClose"
      >
        <el-menu-item index="1" @click="$router.push({ name: 'dashboard' })">
          <el-icon>
            <setting />
          </el-icon>

          <template #title>概览</template>
        </el-menu-item>
        <el-sub-menu index="2">
          <template #title>
            <el-icon>
              <Notebook />
            </el-icon>
            <span>版本库管理</span>
          </template>
          <el-menu-item index="2-1">
            <el-icon>
              <Plus />
            </el-icon>
            <span>创建版本库</span>
          </el-menu-item>
          <el-menu-item index="2-2">
            <el-icon>
              <Edit />
            </el-icon>
            <span>编辑版本库</span>
          </el-menu-item>
          <el-menu-item index="2-3">
            <el-icon>
              <Delete />
            </el-icon>
            <span>删除版本库</span>
          </el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="3">
          <template #title>
            <el-icon>
              <CollectionTag />
            </el-icon>
            <span>分类管理</span>
          </template>
          <el-menu-item index="3-1">
            <el-icon>
              <Plus />
            </el-icon>
            <span>创建分类</span>
          </el-menu-item>
          <el-menu-item index="3-2">
            <el-icon>
              <Edit />
            </el-icon>
            <span>编辑编辑</span>
          </el-menu-item>
          <el-menu-item index="3-3">
            <el-icon>
              <Delete />
            </el-icon>
            <span>删除分类</span>
          </el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="4">
          <template #title>
            <el-icon>
              <Promotion />
            </el-icon>
            <span>话题管理</span>
          </template>
          <el-menu-item index="4-1">
            <el-icon>
              <Plus />
            </el-icon>
            <span>创建话题</span>
          </el-menu-item>
          <el-menu-item index="4-2">
            <el-icon>
              <Edit />
            </el-icon>
            <span>编辑话题</span>
          </el-menu-item>
          <el-menu-item index="4-3">
            <el-icon>
              <Delete />
            </el-icon>
            <span>删除话题</span>
          </el-menu-item>
        </el-sub-menu>
        <el-menu-item index="5">
          <el-icon>
            <Comment />
          </el-icon>
          <template #title>评论列表</template>
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
