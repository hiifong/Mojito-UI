<script setup>
import dayjs from 'dayjs'

defineProps({
  comment: Array
})
</script>

<template>
  <div class="avatar">
    <a href="" target="_blank">
      <el-avatar
        :src="comment.user_info.image"
        class="avatar-item"
        style="width: 40px; height: 40px"
        alt=""
      />
    </a>
  </div>
  <div class="right">
    <div class="author-wrapper">
      <div class="author">
        <a :href="comment.user_info.user_id" class="name">{{ comment.user_info.nickname }}</a>
      </div>
    </div>
    <div class="content">
      <div class="note-content-user" v-for="(user, index) in comment.at_users" :key="index">
        @{{ user.nickname }}
      </div>
      {{ comment.content }}
    </div>
    <div class="comment-picture">
      <div class="img-box">
        <img src="" alt="" class="inner" />
      </div>
    </div>
    <div class="info">
      <div class="date">
        <span>{{ dayjs(comment.create_time).format('DD/MM/YY HH:mm') }}</span>
        <span class="location">{{ comment.ip_location }}</span>
        <span class="reply">回复</span>
      </div>
      <div class="interactions" />
    </div>
  </div>
</template>

<style scoped>
.avatar {
  flex: 0 0 auto;
}

.right {
  margin-left: 12px;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  flex-grow: 1;

  .author-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .author {
      display: flex;
      align-items: center;

      a {
        text-decoration: none;
        background-color: transparent;
      }

      .name {
        color: rgba(51, 51, 51, 0.6);
        line-height: 18px;
      }
    }
  }

  .content {
    margin-top: 4px;
    line-height: 140%;
    color: #333;

    .note-content-user {
      color: #13386c;
    }
  }

  .info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 12px;
    line-height: 16px;
    color: rgba(51, 51, 51, 0.6);

    .date {
      margin: 8px 0;

      .location {
        margin-left: 4px;
        line-height: 120%;
      }

      .reply {
        margin-left: 20px;
        color: #025bff;
      }
    }
  }
}
</style>
