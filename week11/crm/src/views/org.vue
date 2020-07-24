<template>
    <el-container>
        <my-aside :ary="ary"></my-aside>
        <el-main>
            <!-- 凡是能够切换路由发生改变的地方，需要使用router-view -->
            <router-view></router-view>
        </el-main>
    </el-container>
</template>
<script>
import ary from "../router/org.js";
// 导入组件
import navlist from "@/components/navlist.vue";
export default {
  name: '',
  data() { 
    return {
        ary:ary
    }
  },
  components:{
        // 给组件换个名字；
       "my-aside":navlist
  }
 }
</script>

<style lang="less" scoped>
 
</style>