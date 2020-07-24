<template>
    <div class>
        <my-header></my-header>
        <van-tabs v-model="active">
            <van-tab title="关注" to="/home/follow">
                <!-- 这个里面是用来渲染组件的 -->
            </van-tab>
            <van-tab title="推荐" to="/home/recommend"></van-tab>
            <van-tab title="热榜" to="/home/hot"></van-tab>
        </van-tabs>
        <router-view></router-view>
    </div>
</template>

<script>
import headTop from "./header.vue";
export default {
    data() {
        return {
            active: 0, //控制当前默认选中的导航
            ary: [
                { to: "/home/follow" },
                { to: "/home/recomment" },
                { to: "/home/hot" }
            ]
        };
    },
    components: {
        "my-header": headTop
    },
    methods: {
        // change(n) {
        //     //会默认接受到一个索引n；代表当前点击的tab的索引
        //     //当点击van-tab组件时，会默认调用van-tabs的change事件
        //     //console.log(n); //参数代表的是导航的索引  0  1  2；
        //     //this.ary[n]
        //     //编程式导航
        //     //this.$router.push(this.ary[n].to);
        // }
    },
    //生命周期 - 创建完成（访问当前this实例）
    created() {},
    //生命周期 - 挂载完成（访问DOM元素）
    mounted() {}
};
</script>
<style lang="less" scoped></style>
