<template>
    <el-aside width="200px">
        <div class="asideBox">
            <el-row>
                <el-menu
                    default-active="2"
                    class="el-menu-vertical-demo"
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#ffd04b"
                >
                    <el-submenu v-for="(item,index) in munelist" :key="index" :index="index+''">
                        <template slot="title">
                            <i :class="item[0].meta.icon"></i>
                            <span>{{item[0].meta.rootTil}}</span>
                        </template>
                        <router-link v-for="(a,b) in item" :key="b" :to="a.path" tag="span">
                            <el-menu-item>{{a.meta.til}}</el-menu-item>
                        </router-link>
                    </el-submenu>
                </el-menu>
            </el-row>
        </div>
    </el-aside>
</template>

<script>
export default {
    data() {
        return {
            munelist: [],
            //登录时已经存储了power
            power: localStorage.getItem("power"),
        };
    },
    props: ["ary"],
    created() {
        this.init(); //初始化menulist，对传递进来的ary进行再处理
    },
    methods: {
        init() {
            let a = this.ary.filter((item) => {
                return this.power.includes(item.meta.power);
            });
            console.log(a);
            let newAry = [this.ary[0]];
            a.reduce((prev, next) => {
                if (prev.meta.type === next.meta.type) {
                    newAry.push(next);
                } else {
                    this.munelist.push(newAry);
                    newAry = [next];
                }
                return next;
            });
            this.munelist.push(newAry);
        },
    },
    mounted() {},
};
</script>
<style lang='less' >
.aside {
    span {
        color: #fff;
    }
}
.el-submenu__title {
    font-size: 17px !important;
}
</style>