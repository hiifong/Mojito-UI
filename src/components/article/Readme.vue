<script setup>
import GitNoArticle from '@/components/GitNoArticle.vue'
import { Mouse } from '@element-plus/icons-vue'

defineProps({
  text: String
})
</script>

<template>
  <div class="readme">
    <div class="header">
      <span class="title">Title</span>
      <div class="code">
        <el-icon>
          <Mouse />
        </el-icon>
        Using Git Clone: `git clone http://gitno.pkg.best/hiifong/repo.git`
      </div>
    </div>
    <el-divider class="divider" />
    <GitNoArticle :text="text" />
  </div>
</template>

<style lang="scss" scoped>
.readme {

  .divider {
    width: 60%;
    margin: auto;
  }

  .header {
    width: 60%;
    height: 80px;
    line-height: 80px;
    margin: auto;
    display: flex;

    .title {
      font-size: 32px;
      font-weight: bolder;
    }
    .code {
      padding-right: 20px;
      height: 80px;
    }
  }
}
</style>