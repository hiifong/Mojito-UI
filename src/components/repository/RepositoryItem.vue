<script setup>
import dayjs from 'dayjs'
const props = defineProps({
  repository: {}
})

const errorHandler = () => true
</script>

<template>
  <div
    class="repository-card"
    @click="$router.push({ name: 'repository-detail', params: { id: repository.id } })"
  >
    <div class="repository-cover">
      <div
        class="repository-cover-divbg"
        :style="`background:url('${repository?.cover}') no-repeat;background-size: cover;`"
      />
    </div>
    <div class="repository-info">
      <div class="date">
        <el-avatar :size="20" :src="repository.user?.avatar" @error="errorHandler" lazy>
          <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png" />
        </el-avatar>
        <span>{{ repository.user?.username }}</span>
        <span>更新于 {{ dayjs.unix(repository?.updatedAt || 0).format('YYYY/MM/DD HH:mm:ss') }}</span>
      </div>
      <div class="repository-title">
        {{ repository.title
        }}<el-tag type="info" v-if="repository?.isPrivate || false" style="margin-left: 10px">Private</el-tag>
      </div>
      <div class="repository-tips">
        <p class="defualt-branch" v-if="repository?.defaultBranch || false">
          branch: <span>{{ repository.defaultBranch }}</span>
        </p>
      </div>

      <div class="description">
        {{ repository?.description }}
      </div>

      <div class="repository-tags">
        <div class="repository-header">
          <el-tag type="success">{{ repository.category?.name }}</el-tag>
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
      display: flex;
      justify-items: center;
      align-items: center;
      color: #797979;
      font-size: 12px;
      grid-area: auto;

      span {
        margin-left: 10px;
      }
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
        color: #797979;
        span {
          font-size: 15px;
        }
      }
    }
    .description {
      margin-top: 10px;
      font-size: 13px;
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
