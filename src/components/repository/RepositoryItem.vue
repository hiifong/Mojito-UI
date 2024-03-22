<script setup>
import IconPicture from '@/components/icons/Picture.vue'
import dayjs from 'dayjs'
const props = defineProps({
  article: {}
})
</script>

<template>
  <div class="repository-card">
    <div class="repository-cover">
      <!-- <el-image :src="article.cover" fit="fill" lazy>
        <template #error>
          <div class="image-slot">
            <IconPicture />
          </div>
        </template>
      </el-image> -->

      <div
        class="repository-cover-divbg"
        :style="`background:url('${article.cover}') no-repeat;background-size: cover;`"
      />
    </div>
    <div class="repository-info">
      <div class="date">
        更新于 {{ dayjs.unix(article.updatedAt).format('YYYY/MM/DD HH:mm:ss') }}
      </div>
      <div class="repository-title">{{ article.title }}</div>
      <div class="repository-tips">
        <p class="stars">
          star: <span>{{ article.numStars }}</span>
        </p>
        <p class="defualt-branch" v-if="article.defaultBranch">
          defualt branch: <span>{{ article.defaultBranch }}</span>
        </p>
      </div>

      <div class="description">
        {{ article.description }}
      </div>

      <div class="repository-tags">
        <div class="repository-header">
          <el-tag type="success">{{ article.category.name }}</el-tag>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.repository-card {
  border-radius: 15px;
  display: flex;
  justify-content: center;
  width: 507px;
  // width: 80%;
  flex-direction: column;
  box-shadow: 5px 5px 5px 5px #eee;
  .repository-cover {
    overflow: hidden;
    transform: rotate(0deg);
    border-radius: 15px 15px 0 0;
    overflow: hidden;

    &-divbg {
      width: 100%;
      height: 173px;

      &:hover {
        transition: all 0.5s;
        transform: scale(1.2);
        border-radius: 15px 15px 0 0;
      }
    }
  }
  .repository-info {
    position: relative;
    // width: 80%;
    box-sizing: border-box;
    height: 172px;
    padding: 10px 15px;
    padding-bottom: 35px;

    .date {
      color: #797979;
      font-size: 12px;
      grid-area: auto;
    }
    .repository-title {
      font-size: 18px;
      font-weight: 800;

      margin: 15px 0;
    }

    .repository-tips {
      display: flex;
      align-items: center;
      gap: 10px;
      font-family: 'Helvet';
      p {
        font-size: 12px;
        font-weight: 400;
        span {
          font-size: 15px;
        }
      }
    }
    .description {
      margin-top: 10px;
      font-size: 13px;
      font-family: 'Helvetica Neue';
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      text-overflow: ellipsis;
      height: 30px;
    }

    .repository-tags {
      position: absolute;
      bottom: 10px;
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
