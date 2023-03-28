import { defineStore, createPinia } from "pinia"
import router from "@/routers/index"
import { GlobalState } from "@/stores/interface"
import { getAuthMenuListApi } from "@/api/login";
import { getShowMenuList } from "@/utils/util";
// defineStore 调用后返回一个函数，调用该函数获得 Store 实体
export const GlobalStore = defineStore({
    // id: 必须的，在所有 Store 中唯一
    id: "GlobalState",
    // state: 返回对象的函数
    state: (): GlobalState => ({
        authMenuList: []
    }),
    getters: {
        showMenuListGet: state => getShowMenuList(state.authMenuList)
    },
    actions: {
        async getAuthMenuList() {
            const { data } = await getAuthMenuListApi();
            this.authMenuList = data;
        }
    }
});
const pinia = createPinia()
export default pinia;

