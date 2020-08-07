<template>
    <div class="index">
        <el-container>
            <el-header class="header clear">
                <h2 class="lt">CEM客户管理系统</h2>
                <div class="nav lt">
                    <div class="lt">
                        <router-link to="/org" tag="span">组织结构</router-link>
                    </div>
                    <div class="lt">
                        <router-link to="/crm" tag="span">客户管理</router-link>
                    </div>
                </div>
                <div class="userBox rt">
                    <span>{{username}}</span>
                    <span @click="loginout">安全退出</span>
                </div>
            </el-header>
            <div class="middleBox">
                <!-- 用户显示组织结构和客户管理的大组件 -->
                <router-view></router-view>
            </div>
            <el-main>Main</el-main>
        </el-container>
    </div>
</template>

<script>
import { isLogin, signout } from "@/api/index.js";
export default {
    data() {
        return {
            username: "未登录",
        };
    },
    created() {
        //可以获取到localstroge
        //进行一次登录验证
        isLogin().then((data) => {
            if (data.code != 0) {
                this.$router.push("/login");
                return;
            }
            this.username = localStorage.getItem("user");
        });
    },
    methods: {
        loginout() {
            signout().then((data) => {
                if (data.code == 0) {
                    this.$router.push("/login");
                    localStorage.removeItem("user");
                }
            });
        },
    },
    mounted() {},
};
</script>
<style lang='less' >
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
                display: block;
                width: 100%;
                position: relative;
                top: -5px;
                border-bottom: 3px solid white;
            }
        }
        > span {
            display: block;
            width: 100%;
            height: 100%;
            &.router-link-active {
                font-size: 20px;
                font-weight: 700;
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
    left: 0;
    bottom: 0;
    .el-container {
        height: 100%;
    }
    .el-aside {
        background: #50545e;
        color: #333;
        text-align: center;
    }
}
</style>