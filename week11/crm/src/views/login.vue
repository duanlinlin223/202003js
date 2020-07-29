<!-- login -->
<template>
  <div class="loginBox">
    <h2>CRM客户管理系统</h2>
    <h3>为保护企业的数据安全，请妥善保管密码</h3>
    <div>
      <el-input v-model="username" class="inp" placeholder="请输入用户名" prefix-icon="el-icon-user"></el-input>
      <el-input
        type="password"
        v-model="password"
        placeholder="请输入密码"
        class="inp"
        prefix-icon="el-icon-lock"
      ></el-input>
      <el-button class="btn" type="primary" @click="login">登录</el-button>
    </div>
    <p>
      北京珠峰世纪技术培训有限公司 京ICP备09041920号
      京公网安备110108400531号
    </p>
  </div>
</template>

<script>
//@-->相当于src
//解构方式获取到了login.js中的对象
import { login } from "@/api/login.js";

export default {
  name: "login",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    login() {
      //需要发送请求
      //this指向login组件实例
      //console.log(this);
      if (!this.username || !this.password) {
        //由于使用了element-ui；所以ele会给每一个组件实例新增$message这个属性，这是一个函数
        //$message是一个消息框
        this.$message.error("用户名和密码不能为空");
        return;
      }
      //在真实项目中，需要把请求单独放到一个文件夹中；而且需要对axios进行二次封装
      let obj = {
        account: this.username,
        password: this.password
      };
      login(obj).then(data => {
        //console.log(data);
        //element-ui给每个实例提供了$alert方法
        if (data.code === 0) {
          //把权限以及当前的用户名存储到localStorage中
          localStorage.setItem("power", data.power);
          localStorage.setItem("user", this.username);
          this.$alert("恭喜登陆成功", "提示", {
            confirmButtonText: "确定",
            callback: () => {
              //当点击确定按钮，会触发这个回调函数;this指向组件实例
              //登陆成功后改变hash值
              this.$router.push("/");
            }
          });
        }
      });
    }
  }
};
</script>
<style lang="less" scoped>
.loginBox {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  background: #eee;
  // h2 loginBox的所有子孙元素只要是好h2就具备这个样式
  h2 {
    height: 60px;
    line-height: 60px;
    margin-top: 80px;
  }
  h3 {
    margin-bottom: 20px;
  }
  // 必须是loginBox的子元素才可以
  > div {
    width: 300px;
    background: #fff;
    margin: auto;
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
    width: 100%;
    text-align: center;
  }
}
</style>
