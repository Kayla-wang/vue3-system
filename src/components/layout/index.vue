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
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import Header from './header.vue'
import Menu from './menu.vue'
</script>

<style lang="scss" scoped>
</style>
