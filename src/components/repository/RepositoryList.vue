<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/stores/user'
import { getRepoList } from '@/components/repository/Repository'
import RepositoryItem from '@/components/repository/RepositoryItem.vue'

const userStore = useUserStore()
let repositoryList = ref()
const paginationData = ref({
  isPin: [false],
  page: 1,
  total: 0,
  pageSize: 10,
  uid: userStore.user.id
})

const GetRepoList = async (data) => {
  const { list, total } = await getRepoList(data)
  console.log('list===>', list)
  console.log('total===>', total)
  repositoryList.value = list
  paginationData.value.total = total
}

GetRepoList(paginationData.value)

const handleSizeChange = async (val) => {
  console.log(`${val} items per page`)
  paginationData.value.pageSize = val
  await GetRepoList(paginationData.value)
}
const handleCurrentChange = async (val) => {
  console.log(`current page: ${val}`)
  paginationData.value.page = val
  await GetRepoList(paginationData.value)
}
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
      <div class="pagination">
        <el-pagination
          background
          layout="prev, pager, next, total, sizes"
          :total="paginationData.total"
          v-model:page-size="paginationData.pageSize"
          v-model:current-page="paginationData.page"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
    </div>
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

    .pagination {
      display: flex;
      justify-content: center;
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
