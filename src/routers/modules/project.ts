export const project = [
    {
        path: "dashBoard",
        name: 'dashBoard',
        component: () => import("@/views/dashBoard/index.vue"),
        meta: {
            title: "dashBoard",
            icon: '',
            isHide: true
        }
    },
    {
        path: "system",
        name: 'system',
        component: () => import("@/views/system/index.vue"),
        meta: {
            title: "系统配置",
            icon: '',
            isHide: true
        },
        children: [
            {
                path: "menu",
                name: 'menu',
                component: () => import("@/views/system/menu/index.vue"),
                meta: {
                    title: "菜单",
                    icon: '',
                    isHide: true
                }
            }
        ]
    }

];
