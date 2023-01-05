<template>
  <el-container>
    <el-header>
      <Header/>
    </el-header>
    <el-container>
      <el-aside>
        <Menu/>
      </el-aside>
      <el-main>
        <Main/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import Header from '../layout/header.vue'
import Menu from '../layout/menu.vue'
import Main from '../layout/main.vue'
</script>

<style lang="scss" scoped>
</style>
