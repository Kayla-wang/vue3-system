import { createApp } from 'vue'
import App from './App.vue'
import * as VueRouter from 'vue-router'//vue3的写法
import { createPinia } from 'pinia'
import routes from "./routers"

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes
})
const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)
app.mount('#app')
