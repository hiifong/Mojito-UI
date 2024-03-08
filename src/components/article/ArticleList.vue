<script setup>
import { ref } from 'vue'
import ArticleItem from '@/components/article/ArticleItem.vue'

const articelList = ref([
  {
    id: 1,
    title: 'SQL 基础',
    category: ['github', 'git', '笔记'],
    time: '2024-03-05 08:30',
    description: '对讲机噶十多个',
    topic: ['aa', 'bbb', 'cccc'],
    user: {
      id: 1,
      username: 'hiifong',
      avatar: 'https://img.hiif.ong/img/202305060951014.png'
    }
  },
  {
    id: 1,
    title: 'Go Functional Options (Go 函数式选项)',
    category: ['github', 'git', '笔记'],
    time: '2024-03-05 08:30',
    description: '对讲机噶十多个',
    topic: ['aa', 'bbb', 'cccc'],
    user: {
      id: 1,
      username: 'hiifong',
      avatar: 'https://img.hiif.ong/img/202305061751306.png?size=small'
    }
  },
  {
    id: 1,
    title: 'Spring Framework (Spring 框架)',
    category: ['github', 'git', '笔记'],
    time: '2024-03-05 08:30',
    description: '对讲机噶十多个',
    topic: ['aa', 'bbb', 'cccc'],
    user: {
      id: 1,
      username: 'hiifong',
      avatar: 'https://img.hiif.ong/img/202210072023177.jpg'
    }
  },
  {
    id: 1,
    title: '用 Git 打败 Git (用魔法打败魔法) --- Git Magic',
    category: ['github', 'git', '笔记'],
    time: '2024-03-05 08:30',
    description: '对讲机噶十多个',
    topic: ['aa', 'bbb', 'cccc'],
    user: {
      id: 1,
      username: 'hiifong',
      avatar: 'https://img.hiif.ong/img/202305311640349.png'
    }
  },
  {
    id: 1,
    title: 'Go 编程语言规范 [译]',
    category: ['github', 'git', '笔记'],
    time: '2024-03-05 08:30',
    description: '对讲机噶十多个',
    topic: ['aa', 'bbb', 'cccc'],
    user: {
      id: 1,
      username: 'hiifong',
      avatar: 'https://img.hiif.ong/img/202304141930308.jpeg'
    }
  }
])
</script>

<template>
  <div class="article-list">
    <ul>
      <h1>列表</h1>
      <li v-for="(item, index) in articelList" :key="index">
        <ArticleItem :article="item"/>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.article-list {
  display: flex;
  justify-content: center;
}
ul li {
  list-style: none;
  margin-top: 20px;
}
</style>
