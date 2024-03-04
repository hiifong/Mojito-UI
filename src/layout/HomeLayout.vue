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
        <router-view />
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>
