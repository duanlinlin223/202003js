<template>
  <div>
        <el-container>
            <el-header class="header clear">
                <h2 class="lt">CRM客户管理系统</h2>
                <div class="nav lt">
                    <div class="lt">
                        <router-link to="/org" tag="span">组织结构</router-link>
                    </div>
                    <div  class="lt">
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
                <!-- 用于显示index这个组件的子组件 -->
                <router-view></router-view>
            </div>
        </el-container>
  </div>
</template>

<script>
    // 导入接口
    import {isLogin,signout} from "../api/index";
    export default {
        name: 'index',
        data() { 
            return {
                // 如果已经登录，需要把用户名放到这个span中
                name:"未登录"
            }
        },
        created(){
            // 可以获取到localStorage中的
            // 进行一次登录的验证；为了防止直接更改路由访问首页;在created进行一次验证；
            isLogin().then(data=>{
                /// 如果code不为0,那么让其条状到login路由上
                if(data.code!=0){
                    this.$router.push("/login");
                    return;
                }
                // console.log(data);
                this.name = localStorage.getItem("user");
            })      
        },
        methods:{
            loginout(){
                signout().then(data=>{
                    if(data.code==0){
                        this.$router.push("/login");
                        // 清掉localStorage的user;
                        localStorage.removeItem("user");
                    }
                })
            }
        }
    }
</script>
    
<style lang="less">
    // scoped : 代表的是私有样式
    .el-container .header{
        background: #333;
        color:white;
        line-height: 60px;
    }
    .nav{
        padding:0 60px;
        div{
            margin:0 20px;
            cursor: pointer;
            box-sizing: border-box;
            &:hover{
                color:#fff;
                &::after{
                    content:"";
                    display: block;
                    width:100%;
                    position: relative;
                    border-bottom:3px solid rgba(255,255,255);
                    top:-5px;
                }
            }
            >span{
                display: block;
                width:100%;
                height:100%;
                // 这个span是router-link编译来的，当点击这个router-link,那么点击的自动带有class  router-link-active
                &.router-link-active{
                    font-size:20px;
                    font-weight:700;
                }
            }
        }
    }
    .userBox{
        >span:nth-child(2){
            cursor: pointer;
            padding-left:20px;
        }
    }
    .middleBox{
        position: absolute;
        top:60px;
        width:100%;
        left:0;
        bottom:0;
        .el-container{
            height:100%;
            .el-aside{
                background:#50545E;
                color:#333;
                text-align: center;
            }
        }
    }
    
</style>