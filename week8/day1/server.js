let http = require("http");
let url   = require("url");
let fs = require("fs");
http.createServer(function(req,res){
      // 由于每次都执行这个代码，每次都返回8.index.html的内容
      let {pathname}=url.parse(req.url);
    fs.readFile("."+pathname,"utf8",function(err,result){
        res.end(result);
    })
}).listen(8080,function(){
    console.log("端口启动成功");
});