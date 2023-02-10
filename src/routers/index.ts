import { createRouter, createWebHashHistory } from "vue-router";
import { errorRouter } from "@/routers/errorRouter";
import { dynamicRouter } from "@/routers/modules/index";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [ ...dynamicRouter, ...errorRouter],
    strict: false,
    scrollBehavior: () => ({ left: 0, top: 0 })
});

export default router;
