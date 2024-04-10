<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/stores/user'
import { getRepositoryList } from '@/api/repository'
import RepositoryItem from '@/components/repository/RepositoryItem.vue'

let repositoryList = ref()
const paginationData = ref({
  page: 1,
  total: 0,
  pageSize: 10,
  isPrivate: [false],
})

const getRepoList = async (data) => {
  await getRepositoryList(data).then((res) => {
    console.log('data: ', res.data)
    repositoryList.value = res.data.data?.list
    paginationData.value.total = res.data.data?.count || 0
  })
}

getRepoList(paginationData.value)

const handleSizeChange = async (val) => {
  console.log(`${val} items per page`)
  paginationData.value.pageSize = val
  await getRepoList(paginationData.value)
}
const handleCurrentChange = async (val) => {
  console.log(`current page: ${val}`)
  paginationData.value.page = val
  await getRepoList(paginationData.value)
}
</script>

<template>
  <div class="repository">
    <div class="container">
      <h1>版本库列表</h1>
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
  li {
    list-style: none;
    margin-bottom: 20px;
    flex-basis: 20%;
  }
}
</style>
