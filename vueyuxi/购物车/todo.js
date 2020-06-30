let vm = new Vue({
    el:'#app',
    data:{
        task:[
            {isSelected:false,title:'去爬山'},
            {isSelected:false,title:'去吃饭'}
        ],
        val:'',
        cur:"",
        hash:'#all'
    },
    directives:{
        focus(el){
            el.focus()
        }
    },
    created(){
        window.addEventListener('hashchange',()=>{
            this.hash = window.location.hash;
        })
    },
    methods:{
        addTodo(){
            this.task.push({isSelected:false,title:this.val})
            this.val=''
        },
        removeTodo(obj){
            //过滤出去空间地址一模一样的对象
            this.task=this.task.filter(item=>item!==obj)
        },
        remember(obj){
            this.cur=obj;
        },
        update(){
            this.cur=''
        }
    },
    computed:{
        todo(){
            if(this.hash==="#all"){
                return this.task;
            }else if(this.hash==="#finish"){
                return this.task.filter(item=>item.isSelected)
            }else if(this.hash==="#unfinish"){
                return this.task.filter(item=>!item.isSelected)
            }
        },
        count(){
            return this.task.filter(item=>item.isSelected).length;
        }
    }
})