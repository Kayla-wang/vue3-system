import Home from '../views/index.vue'

const routes = [{
    path: '/',
    redirect: '/home',
},{
    name: 'home',
    path: '/home',
    component: Home,
    meta: {
        title: '首页'
    }
}]


export default routes
