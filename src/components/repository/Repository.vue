<script setup>
import { inject } from 'vue'
import { MdPreview, MdCatalog } from 'md-editor-v3'
import Comment from '@/components/comment/Comment.vue'
import 'md-editor-v3/lib/preview.css'
import { useUserStore } from '@/stores/user'
import dayjs from 'dayjs'
import Clipboard from 'clipboard'
import CopyLink from '@/components/icons/CopyLink.vue'

const { repo } = inject('repo')
console.log('repo-->', repo)
const setting = useUserStore().user.setting
const id = 'preview-only'

const clipboard = new Clipboard('.btn')
clipboard.on('success', function (e) {
  ElMessage.success('复制成功')
  e.clearSelection()
})
clipboard.on('error', function (e) {
  ElMessage.warn('复制失败')
})
const errorHandler = () => true

const scrollElement = document.documentElement
</script>
<template>
  <div class="main">
    <div class="repo-header-wrap">
      <div class="title">{{ repo?.title }}</div>
      <el-divider border-style="dashed" />
      <div class="header">
        <el-avatar :size="30" :src="repo.user?.avatar" @error="errorHandler" lazy>
          <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png" />
        </el-avatar>
        <div class="info">
          <span>{{ repo.user?.username }}</span>
          <span>branch：{{ repo?.defaultBranch }}</span>
          <span>更新于{{ dayjs.unix(repo?.updatedAt).format('YYYY/MM/DD HH:MM:ss') }}</span>
          <span>发布于{{ dayjs.unix(repo?.createdAt).format('YYYY/MM/DD HH:MM:ss') }}</span>
          <span class="git-url"
            >Git URL：<span id="url"
              >https://vlv.lol/{{ repo.user?.lowerName }}/{{ repo?.lowerName }}.git</span
            >
            <button class="btn" data-clipboard-target="#url">
              <CopyLink />
            </button>
          </span>
        </div>
      </div>
      <el-divider border-style="dashed" />
    </div>
    <MdPreview
      class="content"
      :editorId="id"
      :modelValue="repo.content"
      :theme="setting.defaultTheme"
      :show-code-row-number="setting.showCodeRowNumber"
      :code-theme="setting.codeTheme"
      :preview-theme="setting.previewTheme"
    />
    <div class="toc-wrap">
      <div class="toc-title">目&nbsp;&nbsp;&nbsp;录</div>
      <div class="toc">
        <MdCatalog
          :editorId="id"
          :scrollElement="scrollElement"
          class="catalog"
          :theme="setting.defaultTheme"
        />
      </div>
    </div>
    <Comment class="comment" />
  </div>
</template>

<style lang="scss" scoped>
.main {
  width: 100%;

  .repo-header-wrap {
    width: 980px;
    margin: auto;

    .title {
      font-weight: bolder;
      font-size: 32px;
    }

    .header {
      display: flex;
      justify-items: center;
      align-items: center;
      color: #797979;

      .info {
        span {
          margin-left: 10px;
        }
        .git-url {
          color: black;

          .btn {
            margin-left: 5px;
            border: none;
          }
        }
      }
    }
  }
  .content {
    width: 980px;
    margin: auto;
  }
  .comment {
    width: 980px;
    margin: auto;
  }

  .toc-wrap {
    position: fixed;
    height: 80vh;
    top: 10%;
    left: 20%;
    width: 200px;
    background-color: #eee;
    border-radius: 15px;

    .toc-title {
      text-align: center;
      padding-top: 20px;
      font-size: 20px;
    }

    .toc {
      display: flex;
      justify-items: center;
      align-items: center;
      position: relative;
      top: 10px;
      left: 0;
      padding-left: 10px;
      padding-right: 10px;

      .catalog {
        font-size: 12px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }

  @media (min-width: 1024px) {
    .toc-wrap {
      left: 20px;
    }
  }
}
</style>
