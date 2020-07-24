import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 按需加载vant中的组件；
// babel-plugin-import : 
import "vant/lib/index.css";
import { Button,Icon,Search,Tabs,Tab } from 'vant';
Vue.use(Button).use(Icon).use(Search).use(Tabs).use(Tab);


// 如果是公共的css；那么在main.js引入；
import "@/less/common.less";// 引入公共样式
// import "@/less/font.less";// 字体图标

// 1.缺点： 这样会引入所有的vant组件，有些不需要用的组件也会被打包到最终的项目中，增大了项目的体积；不利于项目的性能；
//  import Vant from "vant";
//  import "vant/lib/index.css";
//  Vue.use(Vant);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  // h:createElement ==> 构建虚拟的DOM；render函数会把函数返回的虚拟的DOM转成真实的DOM
  // APP.vue是所有的入口；不需要配置路由，因为所有的组件的显示都是在APP.vue中；给new Vue实例提供了唯一的入口；所有的组件的最外层一定是App.vue;
  render: h => h(App)
}).$mount('#app')// #app 获取的是public下面index.html的id是app的元素，而不是app.vue的id;最终app.vue中的id是app的元素将替换public的index.html中的元素；

// npm  run serve : 是webpack的server启动了端口，把这个项目进行部署到本地的端口上；先以main.js作为打包的入口；模块之间相互引用，最终会生成一个新的bundle.js,插入到public下的index.html中，进行视图渲染；

// 这个项目中大家看不到打包的index.html;都是webpack给生成好的；

