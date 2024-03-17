<script setup>
import { MdCatalog, MdPreview } from 'md-editor-v3'
import 'md-editor-v3/lib/preview.css'
import { useUserStore } from '@/stores/user.js'

const userStore = useUserStore()
const id = 'preview-only'

const props = defineProps({
  text: String
})

const scrollElement = document.documentElement
</script>
<template>
  <el-row justify="center">
    <el-col :span="12">
      <MdPreview :editorId="id" :modelValue="text"
                 :theme="userStore.user.setting.defaultTheme"
                 :show-code-row-number="userStore.user.setting.showCodeRowNumber"
                 :code-theme="userStore.user.setting.codeTheme"
                 :preview-theme="userStore.user.setting.previewTheme"
      />
    </el-col>
    <el-col :span="3">
      <el-scrollbar>
        <MdCatalog :editorId="id" :scrollElement="scrollElement" class="toc" />
      </el-scrollbar>
    </el-col>
  </el-row>
</template>

<style scoped>
.el-row {
  margin-bottom: 20px;
}

.el-row:last-child {
  margin-bottom: 0;
}

.el-col {
  border-radius: 4px;
  display: flex;
  align-items: center;

  .el-scrollbar {
    width: auto;
    height: 70%;
    position: fixed;
    top: 180px;
    border-radius: 15px;

    .icon-toc {
      display: flex;
      justify-content: center;
      width: 40px;
      height: 40px;
    }

    .toc {
      background-color: #eee;
    }
  }
}
</style>
