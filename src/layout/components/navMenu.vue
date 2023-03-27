<template>
  <el-menu default-active="menuActive" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
    <SubMenu :menuList="menuList"/>
  </el-menu>
</template>

<script lang="ts" setup>
import SubMenu from './subMenu.vue'
import { onUnmounted } from 'vue'
import { computed } from 'vue'
// import { getAuthMenuListApi } from "@/api/login";
import DynamicRouter from '@/assets/json/dynamicRouter.json'
import { GlobalStore } from '@/stores/index'
let isCollapse = false
let menuActive
let menuList = DynamicRouter.data
function handleOpen(){}
function handleClose(){}
async function getAuthMenuList() {
  // const { data } = await getAuthMenuListApi()
  // menuList = DynamicRouter.data
}
onUnmounted(() => {
  menuList = DynamicRouter.data
  console.log(menuList)
})
// const globalStore = GlobalStore()
// const menuList = computed(() => globalStore.showMenuListGet);
</script>

<style lang="scss" scoped>
</style>
