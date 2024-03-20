<script setup>
const form = {
  "categoryID": 0,
  "cover": "string",
  "defaultBranch": "string",
  "description": "string",
  "importURL": "string",
  "isImport": true,
  "isPin": true,
  "isPrivate": true,
  "name": "string",
  "title": "string",
  "uid": 0
}
</script>

<template>
  <div class="repository">
    <div class="header">
      <el-button type="primary" @click="addCategoryVisible = true">添加</el-button>
    </div>
    <div class="repository-table">
      <el-table :data="tableData" max-height="980" stripe border style="width: 100%">
        <el-table-column fixed prop="id" label="ID" sortable />
        <el-table-column prop="parentID" label="父分类ID" />
        <el-table-column prop="uid" label="用户ID" />
        <el-table-column prop="user.id" label="用户名" />
        <el-table-column prop="name" label="分类名称" />
        <el-table-column prop="description" label="描述" />
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
