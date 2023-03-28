import { createApp } from 'vue'
import App from './App.vue'
import router from "./routers/index"
import '@/styles/common.scss'
import '@/styles/reset.scss'
import '@/styles/vars.scss'
import pinia from "@/stores/index"
import svgIcon from "@/components/svgIcon.vue"
// element plus
import ElementPlus from "element-plus";
// element icons
import * as Icons from "@element-plus/icons-vue";
// element css
import "element-plus/dist/index.css";
// element dark(内置暗黑模式)
import "element-plus/theme-chalk/dark/css-vars.css";
// custom element css
// import "@/styles/element.scss";
import 'virtual:svg-icons-register'

const app = createApp(App)
// 注册element Icons组件
Object.keys(Icons).forEach(key => {
    app.component(key, Icons[key as keyof typeof Icons]);
})
app.use(pinia)
app.use(router)
app.use(ElementPlus)
app.component('svg-icon', svgIcon)
app.mount('#app')
