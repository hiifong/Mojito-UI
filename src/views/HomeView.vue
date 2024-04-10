<script setup>
import RepositoryList from '@/components/repository/RepositoryList.vue'
import { useTokenStore } from '@/stores/token'

const tokenStore = useTokenStore()
</script>

<template>
  <div class="home">
    <div class="nologin" v-if="!tokenStore.isLogin">
      <div class="content">您需要登录后才可以使用！</div>
    </div>
    <RepositoryList v-else />
  </div>
</template>

<style scoped>
.home {
  .nologin {
    display: flex;
    justify-content: center;
    align-items: center;

    .content {
      width: 600px;
      height: 200px;
    }
  }
}
</style>
