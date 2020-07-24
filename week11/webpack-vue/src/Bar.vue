<template>
    <div>
        {{a}}
        <button @click="fn">点击+</button>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                a:1
            }
        },
        methods:{
            fn(){
                this.a++;
                //console.log(this);this指向当前的实例
            }
        }
    }
</script>
<style >
    
</style>