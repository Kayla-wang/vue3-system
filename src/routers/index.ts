import { createRouter, createWebHashHistory } from "vue-router";
import { errorRouter } from "@/routers/errorRouter";
import { project } from "@/routers/modules/project";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [ ...project, ...errorRouter],
    strict: false,
    scrollBehavior: () => ({ left: 0, top: 0 })
});

export default router;
