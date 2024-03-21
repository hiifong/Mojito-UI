<script setup>
import IconPicture from '@/components/icons/Picture.vue'
import dayjs from 'dayjs';
const props = defineProps({
  article: {}
})
</script>

<template>
  <div class="repository-card">
    <div class="repository-cover">
      <el-image :src="article.cover" fit="fill" lazy>
        <template #error>
          <div class="image-slot">
            <IconPicture />
          </div>
        </template>
      </el-image>
    </div>
    <div class="repository-info">
      <div class="repository-title">{{ article.title }}</div>
      <div class="repository-header">
        <el-tag type="success">{{ article.category.name }}</el-tag>
        <div class="date">更新于{{ dayjs.unix(article.updatedAt).format('YYYY/MM/DD HH:mm:ss') }}</div>
      </div>
      <div class="body">
        {{ article.description }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.repository-card {
  width: 80%;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  box-shadow: 5px 5px 5px 5px #eee;
  .repository-cover {
    width: 400px;
    overflow: hidden;
    transform: rotate(0deg);
    .el-image {
      width: 100%;
      height: 100%;
      border-radius: 15px;
    }
    .el-image:hover {
      transition: all 0.5s;
      transform: scale(1.2);
    }
  }
  .repository-info {
    width: 80%;
    height: 100%;
    padding: 10px;
    .repository-title {
      font-size: 22px;
      font-weight: 800;
      text-align: center;
      .date {
        font-size: 16px;
        color: #9a9595;
      }
    }
    .repository-header {
      height: 25px;
      display: flex;
      justify-content: center;
      margin: 10px auto;
    }
  }
}

.image-slot {
  width: 100%;
  height: 100%;
  .IconPicture {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
