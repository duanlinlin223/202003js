class VueRouter{
    constructor(options){
        //监听页面的hash值；如果用到了VueRouter第一次解析页面会有一个默认的hash值
        let {routes}=options;
        //this===>vueRouter的实例；把这个对象存放到了这个实例上
        this.routesMap=routes.reduce((prev,next)=>{
             prev[next.path]=next.component;
             return prev
        },{});
        window.addEventListener('load',()=>{
            //load当页面的图片 dom都加载完以后会默认调用一次这个事件
            location.hash='/'//只要给其hash值，会自动拼上一个#；
        })
        //监听页面的hash值；当页面的hash值改变会触发这个方法；点击了a标签触发hash改变
        // this.route={path:'/'}
        //监听this.route上的path的属性值；让该属性具有响应式
        Vue.util.defineReactive(this.route={},'path','/')
        window.addEventListener('hashchange',()=>{
            let path=location.hash.slice(1);
            this.route.path=path
        });
    }
    
}
VueRouter.install=function(_vue){
    mixin({
        beforeCreate(){
            if(this.$options.router){
                this._router = this.$options.router;
            }else{
                this._router = this.$parent._router
            };
            Vue.component('router-link',{
                props:{
                    to:String
                },
                render(createElement){
                    return <a href={`#${this.to}`}>this.$slot.default</a>
                }
            });
            Vue.component('router-view',{
                render(createElement){
                    //this-->指向组件实例
                    //获取到routeMap和route
                    return createElement(this._router.routesMap[this._router.route.path])
                }
            })
        }
    })
}



Vue.use()
let routes =[{path:"/home",component:home}];
let router = new VueRouter({
    routes
})

let vm = new Vue({
    el:'#app',
    data:{

    },
    router
})