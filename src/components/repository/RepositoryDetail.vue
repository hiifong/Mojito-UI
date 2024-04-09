<script setup>
import { ref, provide } from 'vue'
import { useRoute } from 'vue-router'
import { getRepository } from '@/api/repository.js'
import Repository from '@/components/repository/Repository.vue'

const repo = ref({})
const route = useRoute()

const getRepoDetail = async (id) => {
  console.log('detail', id)
  await getRepository(id).then((res) => {
    repo.value = res.data.data
    console.log('repo-->', repo.value)
  })
}

getRepoDetail(route.params.id)

provide('repo', { repo })
</script>

<template>
  <div class="detail">
    <Repository />
  </div>
</template>

<style scoped></style>
