<script setup>
import IconNotFound from './icons/IconNotFound.vue'
</script>

<template>
  <div class="not-found">
    <IconNotFound />
  </div>
  <div class="go-home">
    <el-link href="/" type="primary">返回首页</el-link>
  </div>
</template>

<style scoped>
.not-found {
  display: flex;
  justify-content: center;
  align-items: center;
}

.go-home{
  display: flex;
  justify-content: center;
}
</style>
