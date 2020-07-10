let vm = new Vue({
    el:"#app",
    data:{
        task:[{isSelected:false,title:"去看书"},{isSelected:false,title:"去打球"}],
        val:'',
        cur:'',
        hash:'#all'
    },
    created(){
        //监听页面的hash，根据hash对data中的hash进行赋值
        //监听hash事件
        window.addEventListener('hashchange',()=>{
            //获取浏览器中的hash值对data中的hash进行赋值
            this.hash = window.location.hash
        })
    },
    directives:{
        focus(ele){
            //自动触发一下input的focus事件
            ele.focus();
        }
    },
    methods:{
        addTodo(){
            if(this.val){
                this.task.push({isSelected:false,title:this.val});
                this.val=''
            }
        },
        remove(obj){
            //只有item这个空间地址和obj相同时才返回false，意味着要把这一项去掉
            this.task=this.task.filter(item=>item!==obj)
        },
        remember(obj){
            //双击的这个li把他的该条li对应的数据中的{}空间地址给了this的cur
            this.cur=obj
        },
        update(){
            this.cur='';//修改完成之后自动显示列表，改变cur的值
        }
    },
    computed:{
        count(){
            //写成函数默认走get方法；过滤出task对象中属性名isSelected是true的个数
            return this.task.filter(item=>item.isSelected).length
        },
        todo(){//todo是根据上面复选框的选中情况来改变的
            //根据hash值的改变return不同的数据
            if(this.hash==="#all"){
                return this.task
            }else if(this.hash==="#finish"){
                return this.task.filter(item=>item.isSelected)
            }else if(this.hash==="#unfinish"){
                return this.task.filter(item=>!item.isSelected)
            }
        }
    }
})