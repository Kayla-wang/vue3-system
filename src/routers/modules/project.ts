export const project = [
    {
        path: "/system",
        name: 'system',
        component: () => import("@/layout/template/default.vue"),
        meta: {
            title: "系统配置",
            icon: ''
        },
        children:[
            {
                path: "menu",
                name: 'menu',
                component: () => import("@/views/system/menu/index.vue"),
                meta: {
                    title: "menu",
                    icon: ''
                }
            },
            {
                path: "role",
                name: 'role',
                component: () => import("@/views/system/role/index.vue"),
                meta: {
                    title: "role",
                    icon: ''
                }
            },
            {
                path: "user",
                name: 'user',
                component: () => import("@/views/system/user/index.vue"),
                meta: {
                    title: "user",
                    icon: ''
                }
            }
        ]
    }
];
