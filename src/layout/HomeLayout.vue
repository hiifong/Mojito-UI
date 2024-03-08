<script setup>
import GitNoHeader from '@/components/GitNoHeader.vue'
</script>

<template>
  <div class="home-layout">
    <el-container>
      <el-header>
        <GitNoHeader />
      </el-header>
      <el-main>
        <el-scrollbar>
          <router-view />
        </el-scrollbar>
      </el-main>
    </el-container>
  </div>
</template>

<style scoped>
.el-header {
  padding: 0;
}
</style>
