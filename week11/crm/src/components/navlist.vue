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
                    <!-- 给每一个循环的元素加上属性key -->
                    <el-submenu v-for="(item, index) in menulist" :key="index" :index="index + ''">
                        <template slot="title">
                            <i :class="item[0].meta.icon"></i>
                            <span>{{ item[0].meta.rootTil }}</span>
                        </template>
                        <router-link v-for="(a, b) in item" :key="b" :to="a.path" tag="span">
                            <el-menu-item>{{ a.meta.til }}</el-menu-item>
                        </router-link>
                    </el-submenu>
                </el-menu>
            </el-row>
        </div>
    </el-aside>
</template>

<script>
// vue-loader : 让改文件中html和js，css整合成一个大的对象，然后一起导出；
export default {
    name: "navlist",
    data() {
        return {
            menulist: [],
            //登录的时候已经存储了power
            power: localStorage.getItem("power"),
        };
    },
    created() {
        this.init(); //初始化menulist；对传递进来的ary进行二次处理
    },
    methods: {
        init() {
            //根据当前用户的power，来处理ary；如果有这个权限，就让他显示，如果没有就不显示
            //power:'userhandle|departhandle|jobhandle|departcustomer|allcustomer|resetpassword'
            //根据用户的power去判断是否有操作改路由的权限
            let a = this.ary.filter((item) => {
                return this.power.includes(item.meta.power);
            });
            //得到一个数组[[{},{}],[{},{}],[{},{}]]
            let newAry = [this.ary[0]];
            a.reduce((prev, next) => {
                if (prev.meta.type === next.meta.type) {
                    //如果前面一项和下一项type相同，那么把下一项扔到newAry中；
                    newAry.push(next);
                } else {
                    this.menulist.push(newAry);
                    newAry = [next];
                }
                return next;
            });
            this.menulist.push(newAry);
        },
    },
    props: ["ary"],
};
</script>

<style lang="less" scoped>
.el-aside {
    height: 100%;
}
.asideBox {
    height: 100%;
    span {
        color: #fff;
    }
}
.router-link-active {
    li {
        background-color: rgb(84, 108, 132) !important;
    }
}
</style>
