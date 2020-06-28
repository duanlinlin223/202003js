let express = require("express");
let app = express();
let bodyParser = require("body-parser");
app.listen(8080,function(){
    console.log("8080端口已经监听成功")
});

// 中间件：在创建完服务以后和处理请求之前，我们经常会做一些事；
// 前端访问index.html文件时，
// 启动服务 请求之前，可以执行这个函数;服务器提前读取了数据，当真正的接口请求来临时，不需要花费更长的时间来读取数据。
app.use(function(req,res,next){
    // req: 请求信息  res： 响应信息  next : 下一步
    // 当发送请求时，该函数才会执行；
    console.log(200)
    next();// 去下一步；
    console.log(500)// next下面的代码是等到请求完成以后，再执行；
});
// 把客户端发送post请求传过来的参数转成对象存储到req.body上；
app.use(bodyParser.urlencoded({
    extended:true
}));
// 可以处理静态的资源 ;这样不需要再读取html,css这些静态资源文件；

//将client文件夹中的静态资源进行解析
app.use(express.static("./client"));
// console.log(100);
// 前端一个请求，对应着后面一个路由；
app.get('/login',function(req,res){
    console.log(400);
});
