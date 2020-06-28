// 登录 ： 获取用户名和密码 然后发送请求；请求成功以后，跳转到首页，不成功，弹出用户名或密码错误

$(function(){
    let $userName = $(".userName"),
    $userPass = $(".userPass"),
    $submit = $(".submit");
    // 给登录的按钮绑定点击事件
    $submit.click(function(){
        // 获取input的value值；
        let userName = $userName.val().trim(),//去空格
            userPass = $userPass.val().trim();
            // 进行非空的校验；
        if(userName===""||userPass===""){
            alert("用户名和密码不能为空，请输入");
            return;
        }
        // 向服务器发送请求
        // 从接口文档中获取到接口的url以及请求方式，请求参数
        // 用户名如果发送get请求，会直接把用户名密码暴露在地址栏中，不安全，所以放在请求体中
        // 前端为了安全考虑；防止别人获取拦截用户名，所以密码可以采用加密的方式；
        userPass = md5(userPass);// 密码经过md5加密之后，会生成一个32位字符串。在后端也有一个md5,那么会解析加密之后的密码和后端存储的密码是否一致，如果密码一致，说明密码正确，可以登录；

        // node server.js : 把后端的代码部署到8888的端口上；一个端口只能启动一个项目；
        axios.post("/user/login",{
            account:userName,
            password:userPass
        }).then(result=>{
            // console.log(result);
            // 如果code为0，说明该用户存在，并且登录成功；
            // power : 权限验证
            let {code,power}=result;
            // console.log(power);
            //总裁办： "userhandle|departhandle|jobhandle|departcustomer|allcustomer|resetpassword"

            //  后勤部 userhandle|departhandle|jobhandle|departcustomer|resetpassword

            // 销售部：""
            // 前端就会根据这个字符串，来判断是否有对应的功能
            if(parseFloat(code)==0){
                alert("恭喜您登录成功",{
                    handled:function(){
                        // 当弹出框消失以后，会执行这个handled函数；
                        localStorage.setItem("power",encodeURIComponent(power));
                         window.location.href="index.html"
                    }
                });
            }
        })
    });
})