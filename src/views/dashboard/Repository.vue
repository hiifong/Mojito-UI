<script setup>
import { reactive, ref } from 'vue'
import { useUserStore } from '@/stores/user.js'
import { deleteCategory, getCategory, getCategoryList } from '@/api/category.js'
import dayjs from 'dayjs'
import { Delete, Edit } from '@element-plus/icons-vue'
import { createRepository, getRepositoryList } from '@/api/repository.js'

const userStore = useUserStore()
const addRepositoryVisible = ref(false)
const formLabelWidth = '250px'
const createForm = reactive({
  uid: userStore.user.id,
  name: '',
  title: '',
  categoryID: 0,
  isImport: false,
  importURL: '',
  description: '',
  isPin: false,
  isPrivate: false,
  cover: '',
  defaultBranch: ''
})
let categoryList = ref()
let tableData = ref([])
const paginationData = ref({
  page: 1,
  total: 0,
  pageSize: 10,
  uid: userStore.user.id
})
const categoryPaginationData = ref({
  page: 1,
  total: 0,
  pageSize: 30,
  uid: userStore.user.id
})

const isLoading = ref(false)

const getRepoTableData = async (data) => {
  const list = await getRepositoryList(data).then((res) => {
    if (res.data.code !== 1) {
      throw new Error('获取用户信息失败')
    }
    return res.data.data
  })
  console.log('list:', list)
  paginationData.value.total = list.count
  tableData.value = list.list
}
getRepoTableData(paginationData.value)
const addRepository = async (form) => {
  isLoading.value = true
  await createRepository(form).then(res => {
    if (res.data.code !== 1) {
      throw new Error('获取分类失败')
    }
    return res
  })
  isLoading.value = false
  addRepositoryVisible.value = false
}

const showCreateDialog = async () => {
  addRepositoryVisible.value = true
  await getCategoryList(categoryPaginationData.value).then(res => {
    categoryList.value = res.data.data.list
  })
}

const timeFormat = (row, column, cellValue, index) => {
  if (cellValue > 0) {
    return dayjs.unix(cellValue).format('YYYY/MM/DD HH:mm:ss')
  }
  return ''
}
const handleEdit = async (id) => {
  console.log('handleEdit:', id)
  const data = await getCategory(id).then((res) => {
    if (res.data.code !== 1) {
      throw new Error('获取分类信息失败')
    }
    return res.data
  })
  // updateForm.value = data.data
  // editCategoryVisible.value = true
}
const handleDelete = async (id) => {
  console.log('handleDelete:', id)
  await deleteCategory(id)
  // await GetTableData(paginationData.value)
}
const handleSizeChange = async (val) => {
  console.log(`${val} items per page`)
  paginationData.value.pageSize = val
}
const handleCurrentChange = async (val) => {
  console.log(`current page: ${val}`)
  paginationData.value.page = val
}
</script>

<template>
  <div class="repository">
    <div class="header">
      <el-button type="primary" @click="showCreateDialog">添加</el-button>
    </div>

    <el-dialog v-model="addRepositoryVisible" title="创建仓库" width="800">
      <el-form :model="createForm">
        <el-form-item prop="uid" label="用户ID" :label-width="formLabelWidth">
          <el-input v-model="createForm.uid" disabled />
        </el-form-item>
        <el-form-item prop="name" label="仓库名称(用于存储在文件系统中的)" :label-width="formLabelWidth">
          <el-input v-model="createForm.name" />
        </el-form-item>
        <el-form-item prop="title" label="标题" :label-width="formLabelWidth">
          <el-input v-model="createForm.title" />
        </el-form-item>
        <el-form-item prop="categoryID" label="分类ID" :label-width="formLabelWidth">
          <el-select v-model="createForm.categoryID" placeholder="分类ID">
            <el-option
              v-for="category in categoryList"
              :label="`${category.id}-${category.name}`"
              :value="category.id"
              :key="category.id"
            />
          </el-select>
        </el-form-item>
        <el-form-item prop="isImport" label="导入仓库" :label-width="formLabelWidth">
          <el-switch v-model="createForm.isImport" />
        </el-form-item>
        <el-form-item
          v-if="createForm.isImport"
          label="导入仓库的地址"
          :label-width="formLabelWidth"
        >
          <el-input v-model="createForm.importURL" placeholder="https://github.com/xxx/xxx.git" />
        </el-form-item>
        <el-form-item prop="description" label="描述" :label-width="formLabelWidth">
          <el-input v-model="createForm.description" type="textarea" />
        </el-form-item>
        <el-form-item prop="isPin" label="置顶" :label-width="formLabelWidth">
          <el-switch v-model="createForm.isPin" />
        </el-form-item>
        <el-form-item prop="isPrivate" label="私有" :label-width="formLabelWidth">
          <el-switch v-model="createForm.isPrivate" />
        </el-form-item>
        <el-form-item prop="cover" label="封面" :label-width="formLabelWidth">
          <el-input v-model="createForm.cover"/>
        </el-form-item>
        <el-form-item prop="defaultBranch" v-if="!createForm.isImport" label="默认分支" :label-width="formLabelWidth">
          <el-input v-model="createForm.defaultBranch" />
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="addRepositoryVisible = false">取消</el-button>
          <el-button type="primary" @click="addRepository(createForm)" :loading="isLoading">创建</el-button>
        </div>
      </template>
    </el-dialog>

    <div class="repository-table">
      <el-table :data="tableData" max-height="980" stripe border scrollbar-always-on style="width: 100%">
        <el-table-column fixed prop="id" label="ID" sortable />
        <el-table-column prop="uid" label="用户ID" />
        <el-table-column prop="user.username" label="用户名" />
        <el-table-column prop="title" label="标题" />
        <el-table-column prop="name" label="名称" />
        <el-table-column prop="category.name" label="分类" />
        <el-table-column prop="description" label="描述" />
        <el-table-column prop="isPin" label="置顶" />
        <el-table-column prop="isPrivate" label="私有" />
        <el-table-column prop="cover" label="封面" />
        <el-table-column prop="defaultBranch" label="默认分支" />
        <el-table-column prop="createdAt" label="创建时间" :formatter="timeFormat" />
        <el-table-column prop="updatedAt" label="更新时间" :formatter="timeFormat" />
        <el-table-column fixed="right" label="操作">
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
.repository {
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

  .repository-table {
    margin-top: 20px;
  }

  .pagination {
    margin-top: 20px;
  }
}
</style>
