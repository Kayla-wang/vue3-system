import { createRouter, createWebHashHistory } from "vue-router";
import { initDynamicRouter } from "@/routers/modules/dynamicRouter";

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
})

export default router;
