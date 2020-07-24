export default [{
        path: '/home/follow',
        component: () => import('@/components/home/follow.vue')
    },
    {
        path: '/home/recommend',
        component: () => import('@/components/home/recommend.vue')
    },
    {
        path: '/home/hot',
        component: () => import('@/components/home/hot.vue')
    }
]