<script setup>
import { ref } from 'vue'
import { useRoute} from 'vue-router'
import { getRepository } from '@/api/repository.js'
import Repository from '@/components/repository/Repository.vue'

let repo = ref({})
const route = useRoute()

const getRepoDetail = async (id) => {
  console.log('detail', id)
  await getRepository(id).then(res => {
    repo.value = res.data.data
    console.log('repo-->', repo.value);
  })
}

getRepoDetail(route.params.id)
</script>

<template>
  <div class="detail">
    <Repository :repo="repo" />
  </div>
</template>

<style scoped>

</style>