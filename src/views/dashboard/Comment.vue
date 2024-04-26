<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/stores/user'
import dayjs from 'dayjs'
import { Delete, Edit } from '@element-plus/icons-vue'
import { getCommentById, commentList, updateComment, deleteComment } from '@/api/comment'

const userStore = useUserStore()

const editCommentVisible = ref(false)
const formLabelWidth = '140px'

let tableData = ref([])
const paginationData = ref({
  page: 1,
  total: 0,
  pageSize: 10,
  uid: userStore.user.id,
  repoID: 0,
  parentID: 0
})

let updateForm = ref()

const timeFormat = (row, column, cellValue, index) => {
  if (cellValue > 0) {
    return dayjs.unix(cellValue).format('YYYY/MM/DD HH:mm:ss')
  }
  return ''
}

const GetTableData = async (data) => {
  const list = await commentList(data).then((res) => {
    if (res.data.code !== 1) {
      throw new Error('获取评论失败')
    }
    return res.data.data
  })
  console.log('list:', list)
  paginationData.value.total = list.count
  tableData.value = JSON.parse(JSON.stringify(list.commentList))
}

GetTableData(paginationData.value)

const isLoading = ref(false)

const editComment = async (id, data) => {
  console.log(data)
  isLoading.value = true
  await updateComment(id, data).then((res) => {
    if (res.data.code !== 1) {
      throw new Error('更新分类失败')
    }
    return res
  })
  isLoading.value = false
  editCommentVisible.value = false
  await GetTableData(paginationData.value)
}

const handleEdit = async (id) => {
  console.log('handleEdit:', id)
  const data = await getCommentById(id).then((res) => {
    if (res.data.code !== 1) {
      throw new Error('获取分类信息失败')
    }
    return res.data
  })
  updateForm.value = data.data
  editCommentVisible.value = true
}

const handleDelete = async (id) => {
  console.log('handleDelete:', id)
  await deleteComment(id)
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
    <div class="header"></div>

    <el-dialog v-model="editCommentVisible" title="修改评论" width="500">
      <el-form :model="updateForm">
        <el-form-item label="ID" :label-width="formLabelWidth">
          <el-input v-model="updateForm.id" disabled />
        </el-form-item>
        <el-form-item label="版本库ID" :label-width="formLabelWidth">
          <el-input v-model="updateForm.repoID" disabled />
        </el-form-item>
        <el-form-item label="父评论ID" :label-width="formLabelWidth">
          <el-input v-model="updateForm.parentID" disabled />
        </el-form-item>
        <el-form-item label="用户名" :label-width="formLabelWidth">
          <el-input v-model="updateForm.user.username" disabled />
        </el-form-item>
        <el-form-item label="评论内容" :label-width="formLabelWidth">
          <el-input v-model="updateForm.content" />
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="editCommentVisible = false">取消</el-button>
          <el-button
            type="primary"
            @click="editComment(updateForm.id, updateForm)"
            :loading="isLoading"
            >更新</el-button
          >
        </div>
      </template>
    </el-dialog>
    <div class="comment-table">
      <el-table :data="tableData" max-height="980" stripe border style="width: 100%">
        <el-table-column fixed prop="id" label="ID" sortable />
        <el-table-column prop="repoID" label="版本库ID" />
        <el-table-column prop="parentID" label="父评论ID" />
        <el-table-column prop="user.username" label="用户名" />
        <el-table-column prop="content" label="评论内容" />
        <el-table-column prop="createTime" label="创建时间" :formatter="timeFormat" />
        <el-table-column prop="updateTime" label="更新时间" :formatter="timeFormat" />
        <el-table-column fixed="right" label="操作" min-width="130">
          <template #default="scope">
            <el-button
              v-if="scope.row.user.id == userStore.user.id"
              size="small"
              type="primary"
              @click="handleEdit(scope.row.id)"
              :icon="Edit"
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
