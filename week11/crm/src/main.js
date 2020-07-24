import Vue from 'vue'
// 默认导入的是runtime;没有compiler方法；不能编译template这个属性；比正常vue.js小6Kb;可以使用render函数来解决

// App就是APP.vue导出的组件
import App from './App.vue'
// 如果文件名是index.js是可以省略的;
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  // render:function(h){
    // 1.h创建虚拟的DOM；h("div",{},点一点) h(组件)
  //   return h(App)
  // },
  render: h => h(App)
}).$mount('#app')

// src ：
// main.js作为webpack打包的入口；在这个入口中引入了App.Vue,router的index.js 以及store的index.js;
// assets ： 静态资源文件，图片，css
// components: 组件；组件时页面的一部分
// router: 配置的路由
// store : vuex
// views : 页面级的组件
// App.vue


// main.js ==> App.vue ==> router-view (渲染路由对应的组件)==>页面hash值是login，根据路由映射表显示login.vue 

