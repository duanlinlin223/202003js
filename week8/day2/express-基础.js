// express  : 是node启动服务的框架，基于node进行封装的，是一个第三方的模块
// npm  install express --save  / yarn  add  express;
let express = require("express");
// express是一个封装的函数,app是express的返回值。可以调用listen方法监听端口号
let app = express();
// express的路由
// 当前端访问8080端口，并且请求路径是/login时，会触发后面这个函数；
// get是get请求
// 浏览器地址栏默认就是get请求；
// 前端发送不同的接口请求，就会走其中一个路由；根据前端发送的路径进行匹配；
// /: 后面就像变量一样
app.get("/login.html/:id",function(req,res){
    // express 已经帮助咱们封装好了请求的信息，这个req一些常用的参数可以直接使用
    // req: 请求信息   res ：响应信息
    // console.log(req);
    // req.query : 请求的参数 ： 对象
    // req.method : 请求方式
    // req.url: 请求的路径
    // req.params : 获取路径动态的参数 对象；：后面是属性名 真正的路径是属性值
    console.log(req.query,req.method,req.url)
    console.log(req.params)// {id:"100"}
    res.send("ABC123");
});
app.get("/list",function(req,res){
    res.send("加油，你可以的")
});
// 这个地方可以控制请求的方式
// 前端的每一个请求都对应了后端的一串代码;前后端的请求方式是协商好；
app.post("/register",function(req,res){
    console.log(1000);
});
// app.all : 不管是什么请求，都可以触发这个回调;什么请求方式都可以的；
// 前端发送请求，只会执行路由对应的函数
app.all("/order",function(req,res){
    // 当发送了对应的请求以后，才会执行
    // res.send("你你你")
    // res.send : 把数据返回客户端，还可以中止该函数；
    res.send("我爱你中国");
    console.log("北京故宫")
})
console.log(111,"长城");// 启动服务时执行这个代码
app.listen(8080,function(){
    console.log("8080已经启动成功");
});