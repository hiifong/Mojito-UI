<script setup>
import CommentInner from '@/components/comment/CommentInner.vue'

defineProps({
  comments: Array,
  total: Number
})
</script>
<template>
  <div class="comments-el">
    <div class="comments-container">
      <div class="total">共 {{ total }} 条评论</div>
      <div class="list-container">
        <div class="parent-comment" v-for="(comment, index) in comments" :key="index">
          <div class="comment-item">
            <div class="comment-inner-container">
              <CommentInner :comment="comment" />
            </div>
          </div>
          <div class="reply-container">
            <div
              class="list-container"
              v-for="(reply_comment, index) in comment.sub_comments"
              :key="index"
            >
              <div class="comment-item comment-item-sub">
                <CommentInner :comment="reply_comment" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.comments-el {
  position: relative;

  .comments-container {
    padding: 16px 8px;

    .total {
      font-size: 14px;
      color: rgba(51, 51, 51, 0.6);
      margin-left: 8px;
      margin-bottom: 12px;
    }

    .list-container {
      position: relative;

      .parent-comment {
        margin-bottom: 16px;

        .comment-item {
          position: relative;
          display: flex;
          padding: 8px;

          .comment-inner-container {
            position: relative;
            display: flex;
            z-index: 1;
            width: 100%;
            flex-shrink: 0;
          }
        }

        .reply-container {
          margin-left: 52px;
        }
      }
    }
  }
}

a {
  text-decoration: none;
  background-color: transparent;
}
</style>
