let express=require('express');
let app=express();
//解析静态文件
app.use(express.static(__dirname));


app.listen(8080),function(req,res){
    console.log('启动成功');

};