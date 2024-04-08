<script setup>
import { inject } from 'vue'
import { MdPreview } from 'md-editor-v3'
import Comment from '@/components/comment/Comment.vue'
import 'md-editor-v3/lib/preview.css'
import { useUserStore } from '@/stores/user'

const repo = inject('repo')
const setting = useUserStore().user.setting
const id = 'preview-only'
</script>
<template>
  <div class="main">
    <MdPreview
      class="content"
      :editorId="id"
      :modelValue="repo.content"
      :theme="setting.defaultTheme"
      :show-code-row-number="setting.showCodeRowNumber"
      :code-theme="setting.codeTheme"
      :preview-theme="setting.previewTheme"
    />
    <Comment class="comment" />
  </div>
</template>

<style lang="scss" scoped>
.main {
  width: 100%;
  min-height: auto;

  .content {
    width: 980px;
    margin: auto;
  }
  .comment {
    width: 980px;
    margin: auto;
  }
}
</style>
