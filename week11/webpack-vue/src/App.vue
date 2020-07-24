// 这是一个vue专用的后缀名文件
// 组件有自己独立的html,css,js ;这种文件让咱们实现每个组件都有自己独立的HTML，css,js;
// template :html;
// script : 写js
// style: 写css
<template>
    <div id="app">
        <span class="word">{{msg}}</span>
        <Bar></Bar>
    </div>
</template>
<script>
    // export default导出的这个对象就是之前组件自己的
    //1先导入
    //2在该页面中components中注册
    //3在页面中使用组件
    
    //在真实项目中只有一个App.vue；这个文件会作为所有组件的渲染文件
    import Bar from './Bar.vue'
    export default {
        data(){
            return {
                msg:"zfpx"
            }
        },
        methods:{

        },
        components:{
            Bar
        },
        computed:{

        },
        watch:{

        }
    }
</script>
<style>
    .word{
        color:red;
    }
</style>