export const dynamicRouter = [
    {
        path: "/dashBoard",
        redirect: "/dashBoard"
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
