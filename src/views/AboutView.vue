<script setup>
import Comment from '@/components/comment/Comment.vue'
</script>

<template>
  <div class="about">
    <Comment class="comment" />
  </div>
</template>
<style lang="scss" scoped>
.about {
  display: flex;
  justify-content: center;
  align-items: center;

  .comment {
    width: 50%;
  }
}
</style>
