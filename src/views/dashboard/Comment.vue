<script setup>
import { reactive, ref } from 'vue'
import { useUserStore } from '@/stores/user'
import dayjs from 'dayjs'
import { Delete, Edit } from '@element-plus/icons-vue'
import {
  createCategory,
  deleteCategory,
  getCategory,
  getCategoryList,
  updateCategory
} from '@/api/category.js'

const userStore = useUserStore()

const addCategoryVisible = ref(false)
const editCategoryVisible = ref(false)
const formLabelWidth = '140px'

let categoryList = ref()

const defaultCategory = {
  id: 0,
  uid: 0,
  parentID: 0,
  name: '无',
  description: ''
}

let tableData = ref([])
const paginationData = ref({
  page: 1,
  total: 0,
  pageSize: 10,
  uid: userStore.user.id
})

const createForm = reactive({
  uid: userStore.user.id,
  parentID: 0,
  name: '',
  description: ''
})

let updateForm = ref()

const timeFormat = (row, column, cellValue, index) => {
  if (cellValue > 0) {
    return dayjs.unix(cellValue).format('YYYY/MM/DD HH:mm:ss')
  }
  return ''
}

const GetTableData = async (data) => {
  const list = await getCategoryList(data).then((res) => {
    if (res.data.code !== 1) {
      throw new Error('获取用户信息失败')
    }
    return res.data.data
  })
  console.log('list:', list)
  paginationData.value.total = list.count
  tableData.value = JSON.parse(JSON.stringify(list.list))
  categoryList.value = list.list
  categoryList.value.push(defaultCategory)
}

GetTableData(paginationData.value)

const isLoading = ref(false)
const addCategory = async (data) => {
  isLoading.value = true
  await createCategory(data).then((res) => {
    if (res.data.code !== 1) {
      throw new Error('获取分类失败')
    }
    return res
  })
  isLoading.value = false
  addCategoryVisible.value = false
  await GetTableData(paginationData.value)
}

const editCategory = async (data) => {
  console.log(data)
  isLoading.value = true
  await updateCategory(data).then((res) => {
    if (res.data.code !== 1) {
      throw new Error('更新分类失败')
    }
    return res
  })
  isLoading.value = false
  editCategoryVisible.value = false
  await GetTableData(paginationData.value)
}

const handleEdit = async (id) => {
  console.log('handleEdit:', id)
  const data = await getCategory(id).then((res) => {
    if (res.data.code !== 1) {
      throw new Error('获取分类信息失败')
    }
    return res.data
  })
  updateForm.value = data.data
  editCategoryVisible.value = true
}
const handleDelete = async (id) => {
  console.log('handleDelete:', id)
  await deleteCategory(id)
  await GetTableData(paginationData.value)
}

const handleSizeChange = async (val) => {
  console.log(`${val} items per page`)
  paginationData.value.pageSize = val
  await GetTableData(paginationData.value)
}
const handleCurrentChange = async (val) => {
  console.log(`current page: ${val}`)
  paginationData.value.page = val
  await GetTableData(paginationData.value)
}
</script>

<template>
  <div class="comment">
    <div class="header">
      <el-button type="primary" @click="addCategoryVisible = true">添加</el-button>
    </div>

    <div class="comment-table">
      <el-table :data="tableData" max-height="980" stripe border style="width: 100%">
        <el-table-column fixed prop="id" label="ID" sortable />
        <el-table-column prop="parentID" label="版本库ID" />
        <el-table-column prop="parentID" label="父评论ID" />
        <el-table-column prop="user.username" label="用户名" />
        <el-table-column prop="name" label="评论内容" />
        <el-table-column prop="createdAt" label="创建时间" :formatter="timeFormat" />
        <el-table-column prop="updatedAt" label="更新时间" :formatter="timeFormat" />
        <el-table-column fixed="right" label="操作" min-width="130">
          <template #default="scope">
            <el-button size="small" type="primary" @click="handleEdit(scope.row.id)" :icon="Edit"
              >编辑
            </el-button>
            <el-button size="small" type="danger" @click="handleDelete(scope.row.id)" :icon="Delete"
              >删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
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
</template>

<style scoped>
.comment {
  .header {
    height: 50px;
    background-color: #eee;
    border-radius: 15px;
    display: flex;
    align-items: center;

    .el-button {
      margin-left: 20px;
    }
  }

  .comment-table {
    margin-top: 20px;
  }

  .pagination {
    margin-top: 20px;
  }
}
</style>
