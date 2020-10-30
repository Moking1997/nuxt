<template>
  <div class="container">
    <Header />
    <div class="container">
      <el-row>
        <el-button>默认按钮</el-button>
        <el-button type="primary">主要按钮</el-button>
        <el-button type="success">成功按钮</el-button>
        <el-button type="info">信息按钮</el-button>
        <el-button type="warning">警告按钮</el-button>
        <el-button type="danger">危险按钮</el-button>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "~/assets/css/variables.scss";
.container {
  width: 100vw;
  height: 100vw;
  background-color: #bb7fbb;
  text-align: center;
  color: #fff;
  font-size: 60px;
}
</style>
