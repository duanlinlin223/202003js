// fs : 文件系统  path: resolve  http
// 服务器开启以后，会一直处于监听的状态；监听前端发送过来的请求，根据前端的请求进行相应的数据处理，处理完以后，再把数据返回给客户端；

// 服务器需要启动一个服务，这个服务部署到一个对应的端口号上，让服务器一直处在监听的状态，那么关闭服务，那么就不再提供响应；
let http = require("http");
let  url = require("url");
let  server = http.createServer(function(req,res){
    // 当前端访问8080端口一次，这个回调函数就会执行一次；
    // console.log(100)
    // 当客户端访问到这个服务器，如果将信息返回给客户端
    // req: 代表是请求信息；
    // res : 响应信息
    // res.end : 把服务端的数据返回给客户端；
    // 如果直接返回中文，会乱码；
    // 因为不知道服务器响应的回来是什么样的数据，需要服务器在返回数据之前，先告诉浏览器，我要返回数据格式；
    // 告诉浏览器按照文本的格式进行解析数据；
    // console.log(req.url);// 端口号后面的路径及参数；
    console.log(url.parse(req.url,true))
    // url.parse : 是处理路径的；pathname代表的是请求的路径  query: 请求的参数  true: 能将路径的参数自动解析成对象
    //后端根据pathname来区分不同的请求；
    // $.ajax({
    //     url:"/user/list",
    //     data:{}
    // })
    res.setHeader("content-type","text/plain;charset=utf8");
    res.end("孙雪斌");
});
// 一个端口号只能部署一个项目，如果同时启动，会出现端口号占用；一个服务器最多可以部署65535个项目
// 端口号0<=port<65536
server.listen(8080,function(){
    // 这个函数是可以不写的
    // 当服务成功监听8080端口以后，就会默认调用该函数
    console.log("端口号监听成功");
});