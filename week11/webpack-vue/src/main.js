// 经常使用import和export进行模块的管理；import导入 export导出
import Vue from "vue";// 会自动去node_modules中找vue这个模块
// Vue: runtime-only ;生产环境用的是runtime-only的vue;比正常的vue.js小6Kb;
// VUE : runtime-only ： 不能解析template属性
// compile 
// 如果是自己的模块，需要加上./去获取模块；如果同级不加，那么获取不到；
import App from "./App.vue";
import Bar from "./Bar.vue"

let vm = new Vue({
    el:"#app",
    data(){
        return {
            msg:"zfpx"
        }
    },
    render(h){
        // createElement : 函数 创建一个虚拟的DOM元素；
        // createElement("div",{},"我爱你中国");
        // createElement(组件)
        // 这个render函数返回什么，那么最终就会渲染什么
        return  h(App)
    }
})

//@vue/cli :搭建项目工具