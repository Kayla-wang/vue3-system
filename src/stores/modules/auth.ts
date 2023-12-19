import { defineStore } from "pinia";
import { AuthState } from "@/stores/interface";
import { getAuthMenuListApi } from "@/api/modules/login";
// import { getKeepAliveRouterName, getShowMenuList, getAllBreadcrumbList } from "@/utils/util";
// import piniaPersistConfig from "@/config/piniaPersist";

// AuthStore
export const AuthStore = defineStore({
    id: "AuthState",
    state: (): AuthState => ({
        // 按钮权限列表
        authButtonList: {},
        // menuList 作为动态路由，不会做持久化存储
        authMenuList: [],
        // 当前页面的 router name，用来做按钮权限筛选
        routeName: ""
    }),
    getters: {
        // 后端返回的菜单列表
        authMenuListGet: state => state.authMenuList,
    },
    actions: {
        // getAuthMenuList
        async getAuthMenuList() {
            const { data } = await getAuthMenuListApi();
            this.authMenuList = data;
        }
    }
    // persist: piniaPersistConfig("AuthState", ["authButtonList", "routeName"])
});
