<script setup>
import GitNoAside from '@/components/dashboard/GitNoAside.vue'
import GitNoHeader from '@/components/dashboard/GitNoHeader.vue'
import { isCollapse } from '@/layout/isCollapse'
</script>

<template>
  <div class="dashboard-layout">
    <el-container>
      <GitNoAside :isCollapse="isCollapse" />
      <el-container class="main">
        <GitNoHeader />
        <el-main>
          <el-scrollbar>
            <router-view />
          </el-scrollbar>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>
.main {
  flex-direction: column;
  height: 100vh;
}
</style>
