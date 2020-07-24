class VueRouter{
    constructor(options){
        // 不管有多少个组件，VueRouter只有一个；而且这个实例还放到了每一个组件上
        // [{path:"/home",component:home},{path:"/list",component:list}];
        // 循环遍历routes; {"/home":home,"/list":list}
        let  {routes} = options;
        // this ==> vueRouter的实例；把这个对象存放到了这个实例上
        this.routesMap = routes.reduce((prev,next)=>{
            prev[next.path]=next.component;
            return prev
        },{});
        // 监听页面的hash值；
        // 如果用到了vueRouter，第一次解析页面，会有一个默认的hash值
        window.addEventListener("load",()=>{
            // 当页面的DOM，图片都加载以后，会默认调用一次这个事件
            // 只要给其hash，会自动拼上#;
            location.hash = "/"
        });
        // 监听页面的hash;当页面hash值改变，点击了a标签，会触发这个方法
        // 把route放到实例上吧，route的path存储了当前的hash值；
        // 监听this.route上的path的属性值；让该属性值具有响应式；
        //监听route 的path  并且给了一个默认的值'/'
        Vue.util.defineReactive(this.route={},"path","/");
        window.addEventListener("hashchange",()=>{
            // location.hash #/home
             let  path = location.hash.slice(1);// ==> /home
             this.route.path = path;
        });
    }
}
VueRouter.install = function(_Vue){
    Vue.mixin({
        // 这个钩子函数要早于组件内部的beforeCreate；给每一个组件新增一个_router
        beforeCreate(){
            // this.$options.router 是VueRouter的一个实例
            if(this.$options.router){
                // 说明是vm实例
                this._router= this.$options.router;
            }else{
                this._router = this.$parent._router;
            }
            // <router-link to="/home">点一点</router-link>
            Vue.component("router-link",{
                props:{
                    to:String
                },
                data(){

                },
                render(createElement){
                    // 虚拟的DOM元素： 指的是就一个普通的对象，存在于{}存在于作用域，存在于内存中 
                    // {type:"ul"}
                    // render: 渲染的函数；把自己的返回值虚拟的DOM能够渲染成真实的DOM对象，这个函数返回什么，最后页面就渲染什么；
                    // createElement第一个参数 是元素标签名   第二个参数 是该标签的行间属性  第三个参数 这个标签的文本内容
                    // <ul abc="100">列表</ul>
                    // createElement("ul",{abc:100},"列表");

                    // 第二种用法： createElement 这个方法可以直接接受一个组件；能够将组件渲染成虚拟的DOM对象
                    // createElement(child)
                    // createElement : 创建一个虚拟的DOM元素
                    // render函数是将虚拟的DOM VNODE转成正式的DOM的函数
                    // JSX语法
                    return <a href={`#${this.to}`}>this.$slots.default</a>
                }
            });
            Vue.component("router-view",{
                render(createElement){
                    // 根据当前页面的hash值，获取到一个动态的组件名
                    // this ==> 组件的实例
                    // 获取到routeMap 和vueRouter实例上的route;
                    // 通过mixin已经把VueRouter的实例放到了每一个组件上；
                    return createElement(this._router.routeMap[this._router.route.path]);
                }
            });
        }
        
    })
}
Vue.use()

let routes =[{path:"/home",component:home}];
new  VueRouter({
    routes// 路由映射表；
});
new Vue({
    router
})
// VueRouter原理： vueRouter是Vue的插件，需要调用Vue.use;当调用Vue.use,会默认调用里面的install方法；当install执行时，通过Vue.mixin方法给每一个组件混入一个beforeCreate,在beforeCreate中给每一个组件新增VueRouter的实例；通过Vue.Component注册了两个全局的组件，分别是router-link和router-view;这个组件中通过render渲染的元素和动态组件；在VUERoute这个类中，解构出传递进来的routes,处理成对象，path作为属性名，组件作为属性值；并且给window做了hashchange事件监听，当hash改变，改变当前实例上的route的path属性；然后通过实例把当前path对应的新的组件名字传递给router-view中render函数，渲染成最新的组件；

