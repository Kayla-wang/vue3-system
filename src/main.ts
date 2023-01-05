import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from "./routers/index"
import '@/styles/common.scss'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)
app.mount('#app')
