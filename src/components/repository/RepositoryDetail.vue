<script setup>
import { ref } from 'vue'
import { useRoute} from 'vue-router'
import Readme from '@/components/repository/Readme.vue'
import { getRepository } from '@/api/repository.js'

let content = ref()
const route = useRoute()

const getRepoDetail = async (id) => {
  console.log('detail', id)
  await getRepository(id).then(res => {
    content.value = res.data.data.content
  })
}

getRepoDetail(route.params.id)
</script>

<template>
  <div class="detail">
    <Readme :text="content" />
  </div>
</template>

<style scoped>

</style>