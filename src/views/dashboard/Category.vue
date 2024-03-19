<script setup>
import { reactive, ref } from 'vue'
import { useUserStore } from '@/stores/user'
import dayjs from 'dayjs'
import { Delete, Edit } from '@element-plus/icons-vue'

const userStore = useUserStore()

const addCategoryVisible = ref(false)
const formLabelWidth = '140px'

const categoryList = ref([])

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

const timeFormat = (row, column, cellValue, index) => {
  if (cellValue > 0) {
    return dayjs.unix(cellValue).format('YYYY/MM/DD HH:mm:ss')
  }
  return ''
}

const GetTableData = async (paginationData.value) => {
  console.log(paginationData)
}

const handleEdit = (id) => {
  console.log('handleEdit:', id)
}
const handleDelete = (id) => {
  console.log('handleDelete:', id)
}

const handleSizeChange = (val) => {
  console.log(`${val} items per page`)
  paginationData.value.pageSize = val
}
const handleCurrentChange = (val) => {
  console.log(`current page: ${val}`)
  paginationData.value.page = val
}
</script>

<template>
  <div class="category">
    <el-button type="primary" @click="addCategoryVisible = true">添加</el-button>

    <el-dialog v-model="addCategoryVisible" title="创建新分类" width="500">
      <el-form :model="createForm">
        <el-form-item label="用户ID" :label-width="formLabelWidth">
          <el-input v-model="createForm.uid" disabled />
        </el-form-item>
        <el-form-item label="父级分类ID" :label-width="formLabelWidth">
          <el-input v-model="createForm.parentID" />
        </el-form-item>
        <el-form-item label="父级分类ID" :label-width="formLabelWidth">
          <el-select v-model="createForm.parentID" placeholder="父级分类ID(可选)">
            <el-option
              v-for="category in categoryList"
              :label="category"
              :value="category"
              :key="category"
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
          <el-button type="primary" @click="addCategoryVisible = false">创建</el-button>
        </div>
      </template>
    </el-dialog>
    <div class="category-table">
      <el-table :data="tableData" max-height="980" stripe border style="width: 100%">
        <el-table-column fixed prop="id" label="ID" sortable />
        <el-table-column prop="uid" label="用户ID" />
        <el-table-column prop="parentID" label="父分类ID" />
        <el-table-column prop="name" label="分类名称" />
        <el-table-column prop="description" label="描述" />
        <el-table-column prop="createdAt" label="创建时间" :formatter="timeFormat" />
        <el-table-column prop="updatedAt" label="更新时间" :formatter="timeFormat" />
        <el-table-column fixed="right" label="操作">
          <template #default="scope">
            <el-button size="small" type="primary" @click="handleEdit(scope.row.id)" :icon="Edit"
              >编辑
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

<style scoped></style>
