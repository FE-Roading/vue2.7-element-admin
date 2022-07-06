<template>
  <div>
    <h2>This is dashoard page</h2>
    <el-button type="primary" @click="onBtnClick">Primary</el-button>
  </div>
</template>
<script lang="ts" setup>
  const onBtnClick = () => {
    console.log("Btn click")
  }
</script>
<style lang="less">
  h2 {
    border-bottom: 1px solid blue;
  }
</style>
