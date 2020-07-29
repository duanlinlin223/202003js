<!-- crm -->
<template>
    <div style="height:100%;">
        <el-container>
            <my-aside :ary="ary"></my-aside>
            <el-main>
                <!-- 凡是能够切换路由发生改变的地方，那么需要使用router-view -->
                <router-view></router-view>
            </el-main>
        </el-container>
    </div>
</template>

<script>
import ary from "@/router/customer.js";
import navlist from "@/components/navlist.vue";
export default {
    name: "crm",
    data() {
        return {
            ary: ary
        };
    },
    components: {
        "my-aside": navlist
    }
};
</script>
<style lang='less' scoped>
</style>