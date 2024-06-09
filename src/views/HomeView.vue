<script setup lang="ts"></script>

<template>
  <main>
    <div class="info-card">
      <el-image src="https://hiif.ong/logo.png" />
      <CalHeatmap />
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
  background-color: #f7f9fe;

  .info-card {
    width: 90%;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    background-color: #fff;
    border: 1px solid #e3e8f7;
    border-radius: 15px;
    box-sizing: border-box;

    .el-image {
      width: 200px;
      height: 200px;
      border-radius: 50%;
    }
  }
}
</style>
