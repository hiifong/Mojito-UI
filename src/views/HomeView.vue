<script setup>
import RepositoryList from '@/components/repository/RepositoryList.vue'
import { useTokenStore } from '@/stores/token'

const tokenStore = useTokenStore()
let login = tokenStore.isLogin
</script>

<template>
  <div class="home">
    <RepositoryList v-if="login" />
    <div class="nologin" v-else>
      <div class="content">您需要登录后才可以使用！</div>
    </div>
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
