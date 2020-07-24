import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/views/index.vue' //import语句必须在当前文件的最上面
import nav from '@/router/nav.js'
Vue.use(VueRouter)

const routes = [{
	path: '/',
	name: 'index',
	component: Index,
	redirect: '/home',
	children: nav
}]

const router = new VueRouter({
	routes
})

export default router