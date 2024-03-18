<script setup>
import { ref } from 'vue'
import { getUserList } from '@/api/user'
import dayjs from 'dayjs'
import { Delete, Edit, Mute } from '@element-plus/icons-vue'

let userList = ref([])

const paginationData = ref({
  page: 1,
  total: 0,
  pageSize: 10
})

const GetUserList = async (data) => {
  await getUserList(data).then((res) => {
    const data = res.data.data
    console.log(data)
    userList.value = data.list
    paginationData.value.total = data.count
  })
}

GetUserList(paginationData.value)

const timeFormat = (row, column, cellValue, index) => {
  if (cellValue > 0) {
    return dayjs.unix(cellValue).format('YYYY/MM/DD HH:mm:ss')
  }
  return ''
}

const handleEdit = (id) => {
  console.log('handleEdit:', id)
}
const handleDisable = (id) => {
  console.log('handleDisable:', id)
}
const handleDelete = (id) => {
  console.log('handleDelete:', id)
}

const handleSizeChange = (val) => {
  console.log(`${val} items per page`)
  paginationData.value.pageSize = val
  GetUserList(paginationData.value)
}
const handleCurrentChange = (val) => {
  console.log(`current page: ${val}`)
  paginationData.value.page = val
  GetUserList(paginationData.value)
}
</script>

<template>
  <div class="user-list">
    <div class="table">
      <el-table :data="userList" max-height="980" stripe border style="width: 100%">
        <el-table-column fixed prop="id" label="ID" sortable />
        <el-table-column prop="username" label="用户名" />
        <el-table-column prop="bio" label="简介" />
        <el-table-column prop="isAdmin" label="是否是管理员" />
        <el-table-column prop="isActive" label="是否已激活账号" />
        <el-table-column prop="disable" label="是否禁用账号" />
        <el-table-column prop="lastLoginAt" label="最后一次登录时间" :formatter="timeFormat" />
        <el-table-column fixed="right" label="操作">
          <template #default="scope">
            <el-button size="small" type="primary" @click="handleEdit(scope.row.id)" :icon="Edit"
              >编辑
            </el-button>
            <el-button size="small" type="warning" @click="handleDisable(scope.row.id)" :icon="Mute"
              >禁用
            </el-button>
            <el-button
              size="small"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              :icon="Delete"
              >删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
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
.user-list {
  width: 90%;
  height: 100%;
  margin: auto;

  .table {
    .pagination {
      width: 50%;
      margin: 10px auto;
    }
  }
}
</style>
