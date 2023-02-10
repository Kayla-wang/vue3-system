<template>
  <el-container>
    <el-header class="header">
<!--      <Header/>-->
    </el-header>
    <el-container class="container">
<!--      <el-aside class="aside">-->
<!--        <Menu/>-->
<!--      </el-aside>-->
      <el-main class="main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import Header from '@/layout/components/header.vue'
import Menu from '@/layout/components/navMenu.vue'
</script>

<style lang="scss" scoped>
.container{
  width: 100%;
  display: flex;
}
.aside {
  width:100px;
  height: calc( 100vh - 50px);
  background: aqua;
}
.main {
  flex:1;
  //background: red;
}
</style>
