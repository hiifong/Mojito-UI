<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/stores/user'
import { getRepoList } from '@/components/repository/Repository'
import RepositoryItem from '@/components/repository/RepositoryItem.vue'
import Pin from '@/components/icons/Pin.vue'

const userStore = useUserStore()
let repositoryList = ref()
const paginationData = ref({
  isPin: [true],
  page: 1,
  pageSize: 10,
  uid: userStore.user.id
})

const GetRepoList = async (data) => {
  const { list } = await getRepoList(data)
  repositoryList.value = list
}

GetRepoList(paginationData.value)
</script>

<template>
  <div class="repository" v-if="repositoryList?.length > 0">
    <div class="container">
      <div class="repository-list">
        <ul>
          <li v-for="(item, index) in repositoryList" :key="index">
            <RepositoryItem :repository="item" />
          </li>
        </ul>
      </div>
    </div>
    <el-divider>
      <Pin></Pin>
    </el-divider>
  </div>
</template>

<style lang="scss" scoped>
.repository {
  margin: auto;

  .container {
    width: 90%;
    margin: auto;

    .repository-list {
      display: flex;
      justify-content: center;
      width: 100%;
    }
  }
}

ul {
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  // gap: 10px;s
  li {
    list-style: none;
    margin-bottom: 20px;
    flex-basis: 20%;
  }
}
</style>
