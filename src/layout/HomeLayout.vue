<script setup>
import Header from '@/components/Header.vue'
</script>

<template>
  <div class="home-layout">
    <el-container>
      <el-header>
        <Header />
      </el-header>
      <el-main>
        <router-view />
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>
