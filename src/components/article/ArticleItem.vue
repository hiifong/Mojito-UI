<script setup>
import IconPicture from '@/components/icons/Picture.vue'
const props = defineProps({
  article: {}
})
</script>

<template>
  <div class="article-card" @click="$router.push({ name: 'home' })">
    <div class="article-cover">
      <el-image :src="article.user.avatar" fit="scale-down" lazy>
        <template #error>
          <div class="image-slot">
            <IconPicture />
          </div>
        </template>
      </el-image>
    </div>
    <div class="article-info">
      <span class="article-title">{{ article.title }}</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.article-card {
  width: 980px;
  height: 200px;
  border-radius: 15px;
  display: flex;
  box-shadow: 5px 5px 5px 5px #eee;
  align-items: center;
  .article-cover {
    overflow: hidden;
    transform: rotate(0deg);
    .el-image {
      width: 400px;
      height: 200px;
      border-radius: 15px;
    }
    .el-image:hover {
      transition: all 0.5s;
      transform: scale(1.2);
    }
  }
  .article-info {
    width: 100%;
    height: 100%;
    background-color: coral;
    .article-title {
      font-size: 22px;
      font-weight: 500;
    }
  }
}

.image-slot {
  .IconPicture {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
