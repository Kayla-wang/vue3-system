import { createApp } from 'vue'
import App from './App.vue'
import router from "./routers/index"
import '@/styles/common.scss'
import '@/styles/reset.scss'
import '@/styles/vars.scss'
import pinia from "@/stores/index"
import svgIcon from "@/components/svgIcon.vue"
import 'virtual:svg-icons-register'

const app = createApp(App)

app.use(pinia)
app.use(router)
app.component('svg-icon', svgIcon)
app.mount('#app')
