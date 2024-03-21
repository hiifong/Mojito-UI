<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/stores/user'
import { getRepositoryList } from '@/api/repository'
import RepositoryItem from '@/components/repository/RepositoryItem.vue'

const userStore = useUserStore()
let articelList = ref()
const paginationData = ref({
  page: 1,
  total: 0,
  pageSize: 10,
  uid: userStore.user.id
})

const getRepoList = async (data) => {
  await getRepositoryList(data).then((res) => {
    console.log('data: ', res.data)
    articelList.value = res.data.data.list
    paginationData.value.total = res.data.data.count
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
      <div class="repository-list">
        <ul>
          <h1>版本库列表</h1>
          <li v-for="(item, index) in articelList" :key="index">
            <RepositoryItem :article="item" />
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
    }
    .pagination {
      display: flex;
      justify-content: center;
    }
  }
}

ul li {
  list-style: none;
  margin-bottom: 20px;
}
</style>
