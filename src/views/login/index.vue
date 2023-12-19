<template>
  <el-button size="large" type="primary" @click="login()">
    login
  </el-button>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { initDynamicRouter } from "@/routers/modules/dynamicRouter";
import { HOME_URL } from "@/config/config";
const router = useRouter();
const login = () => {
  // initDynamicRouter()
  router.push(HOME_URL);
};

</script>

<style scoped lang="scss">
</style>
