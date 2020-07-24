module.exports={
    publicPath:"",
    lintOnSave:false,
    devServer:{
        // proxy代理 前端的项目部署在本地的8080；向知乎的域名进行请求是跨域的状态;去访问知乎的服务器；
        proxy:"https://www.zhihu.com/api"
    }
}
// 只要更改了这个配置文件，一定要重新启动项目
