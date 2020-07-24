<!-- org -->
<template>
    <el-container>
        <my-aside :ary="ary"></my-aside>
        <el-main>
            <!-- 凡是能够切换路由发生改变的地方，那么需要使用router-view -->
            <router-view></router-view>
        </el-main>
    </el-container>
</template>

<script>
import ary from "@/router/org.js";
import navlist from "@/components/navlist.vue";
export default {
    data() {
        return {
            ary: ary,
        };
    },
    components: {
        "my-aside": navlist,
    },
};
</script>
<style lang="less" scoped></style>
