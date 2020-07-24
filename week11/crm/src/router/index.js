import Vue from 'vue'
import VueRouter from 'vue-router'
import index from "../views/index.vue";
import org from "./org";
import crm from "./customer"
// 是第三方插件，需要Vue.use
Vue.use(VueRouter)

const routes = [
    {
        path: "/login",
        name: "login",
        // 按需加载；只有访问这个路由时，才会加载该路由；
        component: () => import("../views/login.vue")
    },
    {
        path:"/",
        component:index,
        redirect:"/org/user",// redirect : 重定向，如果访问/,那么路由会自动重定向到/org/user；
        children:[
            {
                path:"/org",
                name:"org",
                component:()=>import("../views/org.vue"),
                children:org
            },
            {
                path:"/crm",
                name:"crm",
                component:()=>import("../views/crm.vue"),
                chilren:crm
            }
        ]
    }
]

const router = new VueRouter({
    routes
})

export default router
