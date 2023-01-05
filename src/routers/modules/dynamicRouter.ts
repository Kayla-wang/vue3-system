export const dynamicRouter = [
    {
        path: "/home",
        component: () => import("@/components/template/default.vue")
    },
    {
        path: "/dashBoard",
        name: "dashBoard",
        component: () => import("@/views/dashBoard/index.vue"),
        meta: {
            title: "dashBoard"
        }
    }
];
