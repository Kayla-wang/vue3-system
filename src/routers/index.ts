import { createRouter, createWebHashHistory } from "vue-router";
import { errorRouter } from "@/routers/errorRouter";
import { dynamicRouter } from "@/routers/modules/index";

// 将匹配 /users/posva 而非：
// - /users/posva/ 当 strict: true
// - /Users/posva 当 sensitive: true

const router = createRouter({
    history: createWebHashHistory(),
    routes: [ ...dynamicRouter, ...errorRouter],
    strict: false,
    scrollBehavior: () => ({ left: 0, top: 0 }) // return 期望滚动到哪个的位置
});

router.beforeEach(async (to, from) => {
    // if (
    //     // 检查用户是否已登录
    //     !isAuthenticated &&
    //     // ❗️ 避免无限重定向
    //     to.name !== 'Login'
    // ) {
    //     // 将用户重定向到登录页面
    //     return { name: 'Login' }
    // }
})

export default router;
