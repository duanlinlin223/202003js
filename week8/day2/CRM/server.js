let express = require("express");
let bodyParser =require("body-parser");
let session = require("express-session");
let  promiseFs = require("./PromiseFs.js");
let app = express();

//监听一个端口号
app.listen(8080,function(){
    console.log("8080启动成功");
});

// 把处理session的中间件设置上，req.session就可以直接操作session
app.use(session({
    // 里面包含了一些固定的属性名
    secret:"ZFPX",// session的标签名
    resave:false,// 重新保存
    saveUninitialized:false,
    cookie:{
        maxAge:1000*60*60*24
    }
}));
// 利用中间件解决一些传参和静态的问题
app.use(bodyParser.urlencoded({
    extended:true
}));

// 启动服务，读取所有数据库的数据
app.use(function(req,res,next){
    let p1 = promiseFs.readFile("./json/user.json"),
        p2 = promiseFs.readFile("./json/customer.json"),
        p3 = promiseFs.readFile("./json/department.json"),
        p4 = promiseFs.readFile("./json/job.json"),
        p5 = promiseFs.readFile("./json/visit.json");
    Promise.all([p1,p2,p3,p4,p5]).then(results=>{
           let [$userdata,$customerdata,$departmentdata,$jobdata,$visitdata]=results;
            // 把json格式的字符串转成json格式的对象，并且放在了req上面
            req.$userdata = JSON.parse($userdata);
            req.$customerdata = JSON.parse($customerdata);
            req.$departmentdata = JSON.parse($departmentdata);
            req.$jobdata = JSON.parse($jobdata);
            req.$visitdata = JSON.parse($visitdata);
            next();
    }).catch(err=>{
        res.status(500);// 服务器的未知错误
        res.send(err);
    })
})

// 模块化 routes ：专门管理路由
app.use("/user",require("./routes/user"));
// app.use("/department",require("./routes/department"))
// app.use("/job",require("./routes/job"));
// app.use("/customer",require("./routes/customer"));
// app.use("/visit",require("./routes/visit"));




// 静态资源文件
app.use(express.static("./client"));