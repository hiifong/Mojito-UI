<script setup lang="ts"></script>

<template>
  <main>
    <div class="info-card">
      <el-image src="https://hiif.ong/logo.png" />
    </div>
  </main>
</template>

<style lang="scss" scoped>
main {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .info-card {
    width: 80%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;

    .el-image {
      width: 200px;
      height: 200px;
      border-radius: 50%;
    }
  }
}
</style>
