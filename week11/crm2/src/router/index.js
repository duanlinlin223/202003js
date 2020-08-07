import Vue from "vue";
import VueRouter from "vue-router";
import index from "@/views/index.vue";
import org from "./org.js";
import crm from "./customer.js";

Vue.use(VueRouter);

const routes = [
    {
        path: "/login",
        name: "login",
        component: () => import("@/views/login.vue"),
    },
    {
        path: "/",
        name: "index",
        component: index,
        redirect: "/org",
        children: [
            {
                path: "/org",
                name: "org",
                component: () => import("@/views/org.vue"),
                children: org,
            },
            {
                path: "/crm",
                name: "crm",
                component: () => import("@/views/crm.vue"),
                children: crm,
            },
        ],
    },
];

const router = new VueRouter({
    routes,
});

export default router;
