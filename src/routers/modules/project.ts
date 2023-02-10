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

export const project = [
    {
        path: "dashBoard",
        component: () => import("@/views/dashBoard/index.vue"),
        meta: {
            title: "dashBoard"
        }
    }
];
