<script setup>
import { ref } from 'vue'
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

const createForm = ref({
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
  <div class="category">
    <div class="header">
      <el-button type="primary" @click="addCategoryVisible = true">添加</el-button>
    </div>

    <el-dialog v-model="addCategoryVisible" title="创建新分类" width="500">
      <el-form :model="createForm">
        <el-form-item label="用户ID" :label-width="formLabelWidth">
          <el-input v-model="createForm.uid" disabled />
        </el-form-item>
        <el-form-item label="父级分类ID" :label-width="formLabelWidth">
          <el-select v-model="createForm.parentID" placeholder="父级分类ID(可选)">
            <el-option
              v-for="category in categoryList"
              :label="`${category.id}-${category.name}`"
              :value="category.id"
              :key="category.id"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="分类名称" :label-width="formLabelWidth">
          <el-input v-model="createForm.name" />
        </el-form-item>
        <el-form-item label="分类描述" :label-width="formLabelWidth">
          <el-input v-model="createForm.description" />
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="addCategoryVisible = false">取消</el-button>
          <el-button type="primary" @click="addCategory(createForm)">创建</el-button>
        </div>
      </template>
    </el-dialog>

    <el-dialog v-model="editCategoryVisible" title="更新分类" width="500">
      <el-form :model="updateForm">
        <el-form-item label="ID" :label-width="formLabelWidth">
          <el-input v-model="updateForm.id" disabled />
        </el-form-item>
        <el-form-item label="用户ID" :label-width="formLabelWidth">
          <el-input v-model="updateForm.uid" disabled />
        </el-form-item>
        <el-form-item label="父级分类ID" :label-width="formLabelWidth">
          <el-select v-model="updateForm.parentID" placeholder="父级分类ID(可选)">
            <el-option
              v-for="category in categoryList"
              :label="`${category.id}-${category.name}`"
              :value="category.id"
              :key="category.id"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="分类名称" :label-width="formLabelWidth">
          <el-input v-model="updateForm.name" />
        </el-form-item>
        <el-form-item label="分类描述" :label-width="formLabelWidth">
          <el-input v-model="updateForm.description" />
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="editCategoryVisible = false">取消</el-button>
          <el-button type="primary" @click="editCategory(updateForm)" :loading="isLoading"
            >更新</el-button
          >
        </div>
      </template>
    </el-dialog>
    <div class="category-table">
      <el-table :data="tableData" max-height="980" stripe border style="width: 100%">
        <el-table-column fixed prop="id" label="ID" sortable />
        <el-table-column prop="parentID" label="父分类ID" />
        <el-table-column prop="uid" label="用户ID" />
        <el-table-column prop="name" label="分类名称" />
        <el-table-column prop="description" label="描述" />
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

<style lang="scss" scoped>
.category {
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

  .category-table {
    margin-top: 20px;
  }

  .pagination {
    margin-top: 20px;
  }
}
</style>
