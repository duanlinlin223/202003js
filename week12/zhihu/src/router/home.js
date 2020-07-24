export default [{
        path: "/home/fellow",
        component: () => import("@/components/home/fellow.vue")
    },
    {
        path: "/home/recommend",
        component: () => import("@/components/home/recommend.vue")
    },
    {
        path: "/home/hot",
        component: () => import("@/components/home/hot.vue")
    }

]