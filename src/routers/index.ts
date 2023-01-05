import { createRouter, createWebHashHistory } from "vue-router";
import { errorRouter } from "@/routers/modules/staticRouter";
import { dynamicRouter } from "@/routers/modules/dynamicRouter";
/**
 * @description 动态路由参数配置简介
 * @param path ==> 菜单路径
 * @param name ==> 菜单别名
 * @param redirect ==> 重定向地址
 * @param component ==> 视图文件路径
 * @param meta ==> 菜单信息
 * @param meta.icon ==> 菜单图标
 * @param meta.title ==> 菜单标题
 * */
const router = createRouter({
    history: createWebHashHistory(),
    routes: [ ...dynamicRouter, ...errorRouter],
    strict: false,
    scrollBehavior: () => ({ left: 0, top: 0 })
});

export default router;
