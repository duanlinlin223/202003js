// 这个js存储了所有员工列表页面的接口
let  express = require("express");
let route = express.Router();
let promiseFs = require("../PromiseFs");
// 当客户端点击登录时，会走这个路由的回调函数
route.post("/login",function(req,res){
    // console.log(req.body);// req.body就是前段post请求传过来的参数；
    // console.log(req.$userdata);
    // 解构出req.body的用户名和密码；
    let {account,password}=req.body;
    // console.log(account,password);
    // 把用户传递过来的md5进行加密处理,把字符串删去前面四个，后面4个，然后再把字符串倒序；
    password  = password.substring(4).split("").reverse().join("").substring(4);
    // find : 是数组的一个方法，
    let result = req.$userdata.find(item=>{
        // 如果这个函数中return的结果是true，说明找到了符合条件的；如果没有符合条件的，返回undefined；
        // 邮箱 电话  用户名都可以登录
        return  (item.phone===account||item.email===account||item.name===account) && item.password===password;
    });
    console.log(result);
    
    if(result){
        // 如果result存在，说明该用户的用户名和密码是正确的
        let curUser = req.$jobdata.find(item=>{
            return parseFloat(item.id)===parseFloat(result.jobId);
        });
        let power = curUser.power;
        // 设置上cookie;服务器存储，存储当前用户的登录状态；
        req.session.userId = result.id;
        req.session.userPower = power;
        res.status(200);// 设置状态码
        res.type("application/json");// 设置content-type
        res.send({
            code:0,
            codeText:"OK",
            power:power
        })
    }else{
        res.send({
            code:1,
            codeText:"账号密码不匹配"
        })
    }
});
route.get("/login",function(req,res){
    let userId = req.session.userId;
    if(userId){
        res.status(200);
        res.type("application/json");
        res.send({
            code:0,
            codeText:"OK"
        })
    }else{
        res.send({
            code:1,
            codeText:"当前用户未登录"
        })
    }
});
// 权限 ： 路径 url控制权限；
// 安全退出
route.get("/signout",function(req,res){
    req.session.userId=null;
    req.session.userPower = null;
    res.send({
        code:0,
        codeText:"OK"
    })
});
route.get("/list",function(req,res){
    let {departmentId,search}=req.query;
    departmentId= parseFloat(departmentId);
    if(departmentId!==0){
        // find : 
        // filter : 数组的方法；过滤 ;如果函数中返回true，则留下这一项
        req.$userdata=req.$userdata.filter(item=>{
            return parseFloat(item.departmentId)===departmentId;
        });
    }
    if(search!==""){
        req.$userdata = req.$userdata.filter(item=>{
            // includes: 是否包含这个字符，包含返回true，不包含返回false
            return item.name.includes(search)||item.phone.includes(search)||item.email.includes(search);
        })
    }
    req.$userdata=req.$userdata.map(item=>{
        let departmentId = item.departmentId;
        let jobId = item.jobId;
        return {
            id: item.id,
            name: item.name,
            sex: item.sex,
            email: item.email,
            phone:item.phone,
            departmentId: departmentId,
            department:req.$departmentdata.find(item=>parseFloat(item.id)===parseFloat(departmentId)).name ,
            jobId: jobId,
            job:req.$jobdata.find(item=>parseFloat(item.id)===parseFloat(jobId)).name ,
            desc: item.desc
        }
    });
    if(req.$userdata&&req.$userdata.length>0){
        res.status(200);
        res.type("application/json");
        res.send({
            code:0,
            codeText:"OK",
            data:req.$userdata
        })
    }else{
        res.send({
            code:1,
            codeText:"没有匹配到内容"
        })
    }
});
// 点击客户端编译发送的请求
route.get("/info",function(req,res){
    let {userId}=req.query;
     let data = req.$userdata.find(item=>parseFloat(item.id)===parseFloat(userId));
     console.log(data);
     data={
        id: data.id,
        name: data.name,
        sex: data.sex,
        email: data.email,
        phone:data.phone,
        departmentId: data.departmentId,
        department:req.$departmentdata.find(item=>parseFloat(item.id)===parseFloat(data.departmentId)).name ,
        jobId: data.jobId,
        job:req.$jobdata.find(item=>parseFloat(item.id)===parseFloat(data.jobId)).name ,
        desc: data.desc
    }
    if(data.id){
        res.status(200);
        res.type("application/json");
        res.send({
            code:0,
            codeText:"OK",
            data:data
        })
    }
});
route.get("/delete",function(req,res){
    // 在项目中对于重要的操作需要服务器进行二次权限校验
    let power = req.session.userPower;
    if(!power.includes("userhandle")){
        res.status(400);// 没有权限操作
        res.send({
            code:1,
            codeText:"您无权限删除"
        });
        return;
    }
    let {userId}=req.query;
    let flag = req.$userdata.find(item=>{
        return parseFloat(item.id)===parseFloat(userId);
    });
    if(flag){
        // 如果存在，把这一项删除，把删除之后的数据重新写到user.json中
        req.$userdata=req.$userdata.filter(item=>parseFloat(item.id)!==parseFloat(userId));
        // console.log(req.$userdata);
        promiseFs.writeFile("./json/user.json",req.$userdata).then(()=>{
            res.status(200);
            res.type("application/json");
            res.send({
                code:0,
                codeText:"OK"
            })
        }).catch(err=>{
            console.log(err)
            res.status(202);
            res.type("application/json");
            res.send({
                code:1,
                codeText:"删除失败"
            })
        })
    }
});
// 新增用户;
// 获取到前端传递过来的参数，放到对象中，push到req.$userdata;最后把req.$userdata写到user.json中;
route.post("/add",function(req,res){
    // 前端post请求传递过来的参数从req.body获取；get请求传过来的参数是从req.query中获取；
    let {name,sex,email,phone,departmentId,jobId,desc}=req.body;
    req.$userdata.push({
        // 判断数组是否为空，如果空id为1；如果不为空，最后一项id+1；
        id:req.$userdata.length===0?1:req.$userdata[req.$userdata.length-1]['id']+1,
        name,
        password:"8376ac810bb9f231d28fcf1f",
        sex,
        email,
        phone,
        departmentId,
        jobId,
        desc,
        time:new Date().getTime(),
        state:0
    });
    promiseFs.writeFile("./json/user.json",req.$userdata).then(()=>{
        res.status(200);
        res.type("application/json");
        res.send({
            code:0,
            codeText:"OK"
        })
    }).catch(err=>{
        res.status(200);
        res.type("application/json")
        res.send({
            code:1,
            codeText:"新增失败"
        })
    })
})


// 更新数据
// 在req.$userdata中找到和传过来id相同的这个对象
route.post("/update",function(req,res){
    let {userId}=req.body;
    req.$userdata= req.$userdata.map(item=>{
        // 在项目中，后端返回的数据一般都会有id；代表唯一性；
        if(parseFloat(item.id)===parseFloat(userId)){
            return  {
                ...item,// 数据库中原来的对象信息
                ...req.body // 前端传过来的新的数据对象
            }
        }
        return item;
    });
    promiseFs.writeFile("./json/user.json",req.$userdata).then(()=>{
        res.status(200);
        res.type("application/json");
        res.send({
            code:0,
            codeText:"OK"
        })
    }).catch(err=>{
        res.status(200);
        res.type("application/json")
        res.send({
            code:1,
            codeText:"修改失败"
        })
    })

})

module.exports = route;