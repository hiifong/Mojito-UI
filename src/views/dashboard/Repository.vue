<script setup>
import dayjs from 'dayjs'
import { ref } from 'vue'
import { useUserStore } from '@/stores/user.js'
import { getCategoryList } from '@/api/category.js'
import { Delete, Edit } from '@element-plus/icons-vue'
import {
  createRepository,
  updateRepository,
  updateDefaultBranch,
  getRepository,
  getRepositoryList,
  getBranchList,
  deleteRepository
} from '@/api/repository.js'

const userStore = useUserStore()
const addRepositoryVisible = ref(false)
const editRepositoryVisible = ref(false)
const formLabelWidth = '250px'
let repoForm = ref({
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

let editForm = ref()
let categoryList = ref()
let tableData = ref([])
let branchList = ref()
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
  await createRepository(form).then((res) => {
    if (res.data.code !== 1) {
      isLoading.value = false
      addRepositoryVisible.value = false
      throw new Error('创建失败')
    }
    return res
  })
  isLoading.value = false
  addRepositoryVisible.value = false
  await getRepoTableData(paginationData.value)
}

const editRepository = async (form) => {
  isLoading.value = true
  await updateRepository(form).then((res) => {
    if (res.data.code !== 1) {
      isLoading.value = false
      editRepositoryVisible.value = false
      throw new Error('更新失败')
    }
    return res
  })
  await updateDefaultBranch(form.name, { branch: form.defaultBranch })
  isLoading.value = false
  editRepositoryVisible.value = false
  await getRepoTableData(paginationData.value)
}

const showCreateDialog = async () => {
  addRepositoryVisible.value = true
  await getCategoryList(categoryPaginationData.value).then((res) => {
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
  try {
    const res = await getRepository(id)
    console.log('repo:', res)
    editForm.value = res && res.data && res.data.data
  } catch (error) {
    console.log(error)
  }
  await getCategoryList(categoryPaginationData.value).then((res) => {
    categoryList.value = res.data.data.list
  })
  await getBranchList(editForm.value.name).then((res) => {
    branchList.value = res.data.data
  })
  editRepositoryVisible.value = true
}
const handleDelete = async (id) => {
  console.log('handleDelete:', id)
  await deleteRepository(id)
  await getRepoTableData(paginationData.value)
}
const handleSizeChange = async (val) => {
  console.log(`${val} items per page`)
  paginationData.value.pageSize = val
  await getRepoTableData(paginationData.value)
}
const handleCurrentChange = async (val) => {
  console.log(`current page: ${val}`)
  paginationData.value.page = val
  await getRepoTableData(paginationData.value)
}
</script>

<template>
  <div class="repository">
    <div class="header">
      <el-button type="primary" @click="showCreateDialog">添加</el-button>
    </div>

    <el-dialog v-model="addRepositoryVisible" title="创建仓库" width="800">
      <el-form :model="repoForm">
        <el-form-item prop="uid" label="用户ID" :label-width="formLabelWidth">
          <el-input v-model="repoForm.uid" disabled />
        </el-form-item>
        <el-form-item
          prop="name"
          label="仓库名称(用于存储在文件系统中的)"
          :label-width="formLabelWidth"
        >
          <el-input v-model="repoForm.name" />
        </el-form-item>
        <el-form-item prop="title" label="标题" :label-width="formLabelWidth">
          <el-input v-model="repoForm.title" />
        </el-form-item>
        <el-form-item prop="categoryID" label="分类ID" :label-width="formLabelWidth">
          <el-select v-model="repoForm.categoryID" placeholder="分类ID">
            <el-option
              v-for="category in categoryList"
              :label="`${category.id}-${category.name}`"
              :value="category.id"
              :key="category.id"
            />
          </el-select>
        </el-form-item>
        <el-form-item prop="isImport" label="导入仓库" :label-width="formLabelWidth">
          <el-switch v-model="repoForm.isImport" />
        </el-form-item>
        <el-form-item v-if="repoForm.isImport" label="导入仓库的地址" :label-width="formLabelWidth">
          <el-input v-model="repoForm.importURL" placeholder="https://github.com/xxx/xxx.git" />
        </el-form-item>
        <el-form-item prop="description" label="描述" :label-width="formLabelWidth">
          <el-input v-model="repoForm.description" type="textarea" />
        </el-form-item>
        <el-form-item prop="isPin" label="置顶"  :label-width="formLabelWidth">
          <el-switch v-model="repoForm.isPin" />
        </el-form-item>
        <el-form-item prop="isPrivate" label="私有" :label-width="formLabelWidth">
          <el-switch v-model="repoForm.isPrivate" />
        </el-form-item>
        <el-form-item prop="cover" label="封面" :label-width="formLabelWidth">
          <el-input v-model="repoForm.cover" />
        </el-form-item>
        <el-form-item
          prop="defaultBranch"
          v-if="!repoForm.isImport"
          label="默认分支"
          :label-width="formLabelWidth"
        >
          <el-input v-model="repoForm.defaultBranch" />
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="addRepositoryVisible = false">取消</el-button>
          <el-button type="primary" @click="addRepository(repoForm)" :loading="isLoading"
            >创建</el-button
          >
        </div>
      </template>
    </el-dialog>

    <el-dialog v-model="editRepositoryVisible" title="更新仓库" width="800">
      <el-form :model="editForm">
        <el-form-item prop="uid" label="用户ID" :label-width="formLabelWidth">
          <el-input v-model="editForm.uid" disabled />
        </el-form-item>
        <el-form-item
          prop="name"
          label="仓库名称(用于存储在文件系统中的)"
          :label-width="formLabelWidth"
        >
          <el-input v-model="editForm.name" />
        </el-form-item>
        <el-form-item prop="title" label="标题" :label-width="formLabelWidth">
          <el-input v-model="editForm.title" />
        </el-form-item>
        <el-form-item prop="categoryID" label="分类ID" :label-width="formLabelWidth">
          <el-select v-model="editForm.categoryID" placeholder="分类ID">
            <el-option
              v-for="category in categoryList"
              :label="`${category.id}-${category.name}`"
              :value="category.id"
              :key="category.id"
            />
          </el-select>
        </el-form-item>
        <el-form-item prop="description" label="描述" :label-width="formLabelWidth">
          <el-input v-model="editForm.description" type="textarea" />
        </el-form-item>
        <el-form-item prop="isPin" label="置顶" :label-width="formLabelWidth">
          <el-switch v-model="editForm.isPin" />
        </el-form-item>
        <el-form-item prop="isPrivate" label="私有" :label-width="formLabelWidth">
          <el-switch v-model="editForm.isPrivate" />
        </el-form-item>
        <el-form-item prop="cover" label="封面" :label-width="formLabelWidth">
          <el-input v-model="editForm.cover" />
        </el-form-item>
        <el-form-item prop="defaultBranch" label="默认分支" :label-width="formLabelWidth">
          <el-select v-model="editForm.defaultBranch" placeholder="分类ID">
            <el-option v-for="branch in branchList" :label="branch" :value="branch" :key="branch" />
          </el-select>
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="editRepositoryVisible = false">取消</el-button>
          <el-button type="primary" @click="editRepository(editForm)" :loading="isLoading"
            >更新</el-button
          >
        </div>
      </template>
    </el-dialog>

    <div class="repository-table">
      <el-table
        :data="tableData"
        max-height="980"
        stripe
        border
        scrollbar-always-on
        style="width: 100%"
      >
        <el-table-column fixed prop="id" label="ID" sortable />
        <el-table-column prop="uid" label="用户ID" />
        <el-table-column prop="user.username" label="用户名" />
        <el-table-column prop="title" label="标题" />
        <el-table-column prop="name" label="名称" />
        <el-table-column prop="category.name" label="分类" />
        <el-table-column prop="description" label="描述" />
        <el-table-column prop="isPin" label="置顶" />
        <el-table-column prop="isPrivate" label="私有" />
        <el-table-column prop="cover" min-width="200" label="封面" />
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
