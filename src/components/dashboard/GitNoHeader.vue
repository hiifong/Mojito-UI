<script setup>
import { ref } from 'vue'
import { Expand, Fold } from '@element-plus/icons-vue'
import { ArrowRight } from '@element-plus/icons-vue'
import { isCollapse } from '@/layout/isCollapse'
</script>
<template>
  <el-header>
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
  </el-header>
</template>

<style scoped>
.el-header {
  display: flex;
  align-items: center;
  background-color: #dedfe0;
}

.el-breadcrumb {
  margin-left: 20px;
}
</style>
