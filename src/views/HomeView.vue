<script setup>
import { computed } from 'vue'
import RepositoryList from '@/components/repository/RepositoryList.vue'
import { useTokenStore } from '@/stores/token'

const tokenStore = useTokenStore()
const isLogin = computed(() => {
  return tokenStore.token?.length > 0
})
</script>

<template>
  <div class="home">
    <RepositoryList v-if="isLogin" />
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
