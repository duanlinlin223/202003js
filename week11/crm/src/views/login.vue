<template>
  <div class="loginBox">
    <h2>CRM客户管理系统</h2>
    <h3>为保护企业的数据安全，请妥善保管密码</h3>
    <div>
      <el-input v-model="username" class="inp" placeholder="请输入用户名" prefix-icon="el-icon-user"></el-input>
      <el-input
        type="password"
        class="inp"
        v-model="password"
        placeholder="请输入密码"
        prefix-icon="el-icon-lock"
      ></el-input>
      <el-button type="primary" class="btn" @click="login">登录</el-button>
    </div>
    <p>北京珠峰世纪技术培训有限公司 京ICP备09041920号 京公网安备110108400531号</p>
  </div>
</template>

<script>
// 在真实的项目中，当安装A模块的时候，会自动删除B模块；如果出现这样现象，重新npm i;安装所有的模块；

// @ ==> 相当于src
// 解构方式获取到了login.js的login方法
import  {login} from "@/api/login.js";    
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
        // 需要发送请求
        // this ==> 指向当前的login组件的实例     console.log(this);
        if(!this.username||!this.password){
            // 只要其中有一个是空，则不能发送登录的请求
            //由于使用了element-ui;所以ele会给每一个组件实例新增$message属性，这是一个函数； 
            // $message 是一个消息框
            // console.log(this);
            this.$message.error("用户名和密码不能为空");
            return;
        }
        
        // 在真实的项目，往往需要把请求单独放到一个文件夹中；而且在真实的项目，需要对axios进行二次封装
        let obj = {
            account:this.username,
            password:this.password
        }
        login(obj).then(data=>{
            // element-ui :给每个实例提供了$alert方法
           if(data.code===0){
                 console.log(data);
                // 把权限以及当前的用户名存储到localStorage中
                localStorage.setItem("power",data.power);
                localStorage.setItem("user",this.username);
                this.$alert("恭喜登录成功","提示",{
                  confirmButtonText:"确定",
                  callback:()=>{
                    // 当点击确定按钮时，会触发个回调函数
                    // 登录成功后，改变hash值；
                    this.$router.push("/");
                  }
              })
           }
        })
    }
  }
};
</script>

<style lang="less" scoped>
.loginBox {
  width: 100%;
  height: 100%;
  text-align: center;
  background: #eee;
  position: fixed;
  left: 0;
  top: 0;
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