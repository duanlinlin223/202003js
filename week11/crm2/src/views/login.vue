<template>
    <div class="login">
        <h2>CRM客户管理系统</h2>
        <h3>为了保护企业的数据安全，请妥善保管密码</h3>
        <div>
            <el-input
                v-model="username"
                placeholder="请输入用户名"
                prefix-icon="el-icon-user"
                class="inp"
            ></el-input>
            <el-input
                type="password"
                v-model="password"
                placeholder="请输入密码"
                prefix-icon="el-icon-lock"
                class="inp"
            ></el-input>
            <el-button type="primary" class="btn" @click="login">登录</el-button>
        </div>
        <p>北京珠峰世纪技术培训有限公司 京ICP备900808080808</p>
    </div>
</template>

<script>
import { login } from "@/api/login.js";
export default {
    data() {
        return {
            username: "",
            password: "",
        };
    },
    created() {},
    methods: {
        //需要发送登录请求
        login() {
            if (!this.username || !this.password) {
                this.$message.error("用户名和密码不能为空");
                return;
            }
            //发送请求
            let obj = {
                account: this.username,
                password: this.password,
            };
            login(obj).then((data) => {
                console.log(data);
                localStorage.setItem("power", data.power);
                localStorage.setItem("user", this.username);
                if (data.code == 0) {
                    this.$alert("恭喜登录成功", "提示", {
                        confirmButtonText: "确定",
                        callback: () => {
                            this.$router.push("/");
                        },
                    });
                }
            });
        },
    },
};
</script>
<style lang="less" scoped>
.login {
    width: 100%;
    height: 100%;
    background: #ccc;
    text-align: center;
    position: fixed;
    left: 0;
    top: 0;
    h2 {
        height: 60px;
        line-height: 60px;
        margin-top: 80px;
    }
    h3 {
        margin-bottom: 20px;
    }
    > div {
        width: 300px;
        background: #fff;
        margin: 0 auto;
        padding-top: 20px;
        .inp {
            width: 80%;
            margin: 5px;
        }
        .btn {
            margin: 20px 0;
            width: 80%;
        }
    }
    > p {
        position: absolute;
        bottom: 20px;
        text-align: center;
        width: 100%;
    }
}
</style>
