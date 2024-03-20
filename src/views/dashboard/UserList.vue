<script setup>
import { reactive, ref } from 'vue'
import { getUserList, getUserInfo, updateUser } from '@/api/user'
import UploadAvatar from '@/components/dashboard/UploadAvatar.vue'
import dayjs from 'dayjs'
import { Delete, Edit, Mute } from '@element-plus/icons-vue'

const editUserVisible = ref(false)
let userList = ref([])

const paginationData = ref({
  page: 1,
  total: 0,
  pageSize: 10
})

let form = reactive({
  id: 0,
  username: '',
  lowerName: '',
  password: '',
  bio: '',
  avatar: '',
  primaryEmail: '',
  emails: [],
  lastLoginAt: '',
  defaultBranch: '',
  defaultTheme: '',
  previewTheme: '',
  codeTheme: '',
  showCodeRowNumber: false
})
const formRef = ref()

const themes = ref(['light', 'dark'])

const previewThemes = ref(['default', 'github', 'vuepress', 'mk-cute', 'smart-blue', 'cyanosis'])

const codeThemes = ref([
  'atom',
  'a11y',
  'github',
  'gradient',
  'kimbie',
  'paraiso',
  'qtcreator',
  'stackoverflow'
])

const GetUserInfo = async (id) => {
  await getUserInfo(id).then((resp) => {
    const data = resp.data.data.user
    console.log('user: ', data)
    form.id = data.id
    form.username = data.username
    form.lowerName = data.lowerName
    form.bio = data.bio
    form.avatar = data.avatar
    form.primaryEmail = data.primaryEmail
    form.emails = data.emails
    form.lastLoginAt = data.lastLoginAt
    form.defaultBranch = data.setting.defaultBranch
    form.defaultTheme = data.setting.defaultTheme
    form.previewTheme = data.setting.previewTheme
    form.codeTheme = data.setting.codeTheme
    form.showCodeRowNumber = data.setting.showCodeRowNumber
  })
}

const updateAvatar = (url) => {
  form.avatar = url
}

const onSubmit = async (form) => {
  await updateUser(form)
  editUserVisible.value = false
  await GetUserList(paginationData.value)
}
const resetForm = async (id) => {
  form.password = ''
  await GetUserInfo(id)
}

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

const handleEdit = async (id) => {
  console.log('handleEdit:', id)
  editUserVisible.value = true
  await GetUserInfo(id)
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
    <el-dialog v-model="editUserVisible" title="更新用户" width="500">
      <el-form
        :model="form"
        ref="formRef"
        label-width="auto"
        style="max-width: 980px"
        class="user-form"
      >
        <el-form-item prop="avatar">
          <UploadAvatar :avatar="form.avatar" @updateAvatar="updateAvatar" />
        </el-form-item>
        <el-form-item prop="id" label="用户ID">
          <el-input v-model="form.id" disabled />
        </el-form-item>
        <el-form-item prop="username" label="用户名">
          <el-input v-model="form.username" />
        </el-form-item>
        <el-form-item prop="lowerName" label="用户名(小写)">
          <el-input v-model="form.lowerName" disabled />
        </el-form-item>
        <el-form-item prop="password" label="密码">
          <el-input v-model="form.password" type="password" show-password />
        </el-form-item>
        <el-form-item prop="bio" label="简介">
          <el-input v-model="form.bio" type="textarea" />
        </el-form-item>
        <el-form-item prop="primaryEmail" label="主邮箱">
          <el-select v-model="form.primaryEmail" placeholder="请选择你的主要邮箱">
            <el-option v-for="e in form.emails" :label="e.email" :value="e.email" :key="e.email" />
          </el-select>
        </el-form-item>
        <el-form-item label="最近一次登录">
          {{ dayjs.unix(form.lastLoginAt).format('YYYY-MM-DD HH:mm:ss') }}
        </el-form-item>
        <el-form-item prop="defaultBranch" label="默认分支">
          <el-input v-model="form.defaultBranch" />
        </el-form-item>
        <el-form-item prop="defaultTheme" label="默认主题">
          <el-select v-model="form.defaultTheme" placeholder="请选择你的主题">
            <el-option v-for="theme in themes" :label="theme" :value="theme" :key="theme" />
          </el-select>
        </el-form-item>
        <el-form-item prop="previewTheme" label="预览主题">
          <el-select v-model="form.previewTheme" placeholder="请选择你的主题">
            <el-option v-for="theme in previewThemes" :label="theme" :value="theme" :key="theme" />
          </el-select>
        </el-form-item>
        <el-form-item prop="codeTheme" label="代码主题">
          <el-select v-model="form.codeTheme" placeholder="请选择你的代码主题">
            <el-option v-for="theme in codeThemes" :label="theme" :value="theme" :key="theme" />
          </el-select>
        </el-form-item>
        <el-form-item prop="showCodeRowNumber" label="显示代码行号">
          <el-switch v-model="form.showCodeRowNumber" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit(form)">更新</el-button>
          <el-button @click="resetForm(form.id)">重置</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
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
.user-list {
  width: 90%;
  height: 100%;
  margin: auto;

  .table {
  }

  .pagination {
    margin-top: 20px;
  }
}
</style>
