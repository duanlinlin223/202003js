import home from './home.js'
export default [{
    path: '/home',
    name: 'home',
    component: () => import('@/components/home/home.vue'),
    children: home
}, {
    path: '/vip',
    name: 'vip',
    component: () => import('@/components/vip/vip.vue')
}, {
    path: '/user',
    name: 'user',
    component: () => import('@/components/user/user.vue')
}, {
    path: '/notify',
    name: 'notify',
    component: () => import('@/components/notify/notify.vue')
}]