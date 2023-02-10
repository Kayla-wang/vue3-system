export const dynamicRouter = [
    {
        path: "/",
        redirect: "/default"
    },
    {
        path: "/default",
        component: () => import("@/layout/template/default.vue"),
        children: [
            {
                path: "dashBoard",
                component: () => import("@/views/dashBoard/index.vue"),
                meta: {
                    title: "dashBoard"
                }
            }
        ]
    },
    {
        path: "/other",
        component: () => import("@/layout/template/other.vue"),
        children: [
            {
                path: "dashBoard",
                component: () => import("@/views/dashBoard/index.vue"),
                meta: {
                    title: "dashBoard"
                }
            }
        ]
    }
];
