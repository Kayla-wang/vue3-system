import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from "./routers/index"
import '@/styles/common.scss'
import svgIcon from "@/components/svgIcon.vue";
import 'virtual:svg-icons-register'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)
app.component('svg-icon', svgIcon)
app.mount('#app')
