let express = require('express');
let app=express();

app.use(function(req,res,next){
    //通过设置响应头  可以设置允许请求地址
    //*  星号代表所有路径，
    res.header('Access-Control-Allow-Origin','http://127.0.0.1:5500');
    res.header('Access-Control-Allow-Methods','GET,POST');
    next();
})
app.get('/getData',function(req,res){
    res.send('aaa')
});


app.listen(8080);