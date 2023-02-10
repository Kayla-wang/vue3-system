<template>
  <el-menu default-active="menuActive" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
    <SubMenu/>
  </el-menu>
</template>

<script lang="ts" setup>
import SubMenu from './subMenu.vue'
let isCollapse = false
let menuActive
function handleOpen(){}
function handleClose(){}
</script>

<style lang="scss" scoped>
</style>
