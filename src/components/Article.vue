<script setup>
import { MdPreview, MdCatalog } from 'md-editor-v3';
import 'md-editor-v3/lib/preview.css';

const id = 'preview-only';

const props = defineProps({
    text: String
})

const scrollElement = document.documentElement;
</script>
<template>
    <el-row justify="center">
        <el-col :span="4">
            <MdCatalog :editorId="id" :scrollElement="scrollElement" class="toc" />
        </el-col>
        <el-col :span="12">
            <MdPreview :editorId="id" :modelValue="text" />
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
    margin-top: 50px;
    border-radius: 4px;
}

.toc {
    padding-top: 200px;
}
</style>