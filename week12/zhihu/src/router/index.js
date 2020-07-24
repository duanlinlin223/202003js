import Vue from 'vue'
import VueRouter from 'vue-router'
// import的语句必须在当前文件的最上面
import Index from "@/views/index.vue";
import nav from "./nav.js";
Vue.use(VueRouter);
const routes = [{
	path: '/',
	name: "index",
	component: Index,
	redirect: "/home",
	children: nav
}]

const router = new VueRouter({
	routes
})

export default router