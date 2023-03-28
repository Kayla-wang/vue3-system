<template>
  <el-menu default-active="menuActive"
           @open="handleOpen"
           @close="handleClose"
           :collapse="isCollapse"
           background-color="#545c64"
           text-color="#fff"
           active-text-color="#ffd04b">
    <SubMenu :menuList="menuList"/>
  </el-menu>
</template>

<script lang="ts" setup>
import SubMenu from './subMenu.vue'
import { onUnmounted } from 'vue'
import { getShowMenuList } from "@/utils/util";
import { ref } from 'vue'
import { computed } from 'vue'
// import { getAuthMenuListApi } from "@/api/login";
import DynamicRouter from '@/assets/json/dynamicRouter.json'
import { GlobalStore } from '@/stores/index'
let isCollapse = false
let menuActive
const menuList = getShowMenuList(DynamicRouter.data)
function handleOpen(){}
function handleClose(){}
async function getAuthMenuList() {
  // const { data } = await getAuthMenuListApi()
  // menuList = DynamicRouter.data
}
onUnmounted(() => {
})
// const globalStore = GlobalStore()
// const menuList = computed(() => globalStore.showMenuListGet);
</script>

<style lang="scss" scoped>
</style>
