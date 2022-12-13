import Home from '../views/index.vue'

const routes = [{
    path: '/',
    redirect: '/home',
},{
    name: 'home',
    path: '/home',
    component: Home,
}]


export default routes
