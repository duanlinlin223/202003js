<!--  -->
<template>
    <div>
        <el-container>
            <el-header class="header clear">
                <h2 class="lt">CRM客户管理系统</h2>
                <div class="nav lt">
                    <div class="lt">
                        <router-link to="/org" tag="span">组织结构</router-link>
                    </div>
                    <div class="lt">
                        <router-link to="/crm" tag="span">客户管理</router-link>
                    </div>
                </div>
                <div class="userBox rt">
                    <span>{{name}}</span>
                    <span @click="loginout">安全退出</span>
                </div>
            </el-header>
            <div class="middleBox">
                <!-- 用于显示组织结构和客户端的大组件 -->
                <!-- 用于显示index组件的子组件 -->
                <router-view></router-view>
            </div>
        </el-container>
    </div>
</template>

<script>
//导入接口
import { isLogin } from "@/api/index";
import { signout } from "@/api/index";
export default {
    name: "index",
    data() {
        return {
            //如果已经登录需要把用户名放到span中
            name: "未登录"
        };
    },
    methods: {
        loginout() {
            signout().then(data => {
                if (data.code == 0) {
                    this.$router.push("/login");
                }
            });
        }
    },
    created() {
        //可以获取到loaclStorage中的user
        //进行一次登录的验证
        isLogin().then(data => {
            //如果code不为0，那么让其跳回登录页；
            if (data.code !== 0) {
                this.$router.push("/login");
                return;
            }
            this.name = localStorage.getItem("user");
        });
    }
};
</script>
<style lang='less'>
//scoped代表私有样式；

.el-container .header {
    background: #333;
    color: white;
    line-height: 60px;
}
.nav {
    padding: 0 60px;
    div {
        margin: 0 20px;
        cursor: pointer;
        box-sizing: border-box;
        &:hover {
            color: #fff;
            &::after {
                content: "";
                position: relative;
                top: -5px;
                display: block;
                width: 100%;
                border-bottom: 3px solid rgba(255, 255, 255);
            }
        }
        > span {
            display: block;
            width: 100%;
            height: 100%;
            //span是router-link编译来的，当点击这个标签后，那么点击的自动带有class--->router-link-active
            &.router-link-active {
                font-size: 20px;
                font-weight: bold;
            }
        }
    }
}
.userBox {
    > span:nth-child(2) {
        cursor: pointer;
        padding-left: 20px;
    }
}
.middleBox {
    position: absolute;
    top: 60px;
    width: 100%;
    left: 0px;
    bottom: 0;
    .el-container {
        height: 100%;
        .el-aside {
            background: #50545e;
            color: #333;
            text-align: center;
        }
    }
}
</style>