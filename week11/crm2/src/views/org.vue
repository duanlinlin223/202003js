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
import navList from "@/components/navList.vue";
import ary from "@/router/org.js";
export default {
    data() {
        return {
            ary: ary,
        };
    },
    created() {},
    components: {
        "my-aside": navList,
    },
};
</script>
<style lang='less' scoped>
</style>