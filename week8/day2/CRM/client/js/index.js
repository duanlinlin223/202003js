//这个index.js是首页的js
// 后台管理系统，一般是有角色的；角色你看到这个项目不一样；
// 每一个用户当登录时，后端都会返回一个字段power
$(function(){
    // 形成一个闭包，让里面变量成为私有的；
    let power = localStorage.getItem("power");// 获取localStorage中的power;
    power = decodeURIComponent(power);
    // console.log(power);
    // 左侧导航应该根据权限来生成；不能写死；
    // power:存储了当前用户权限的信息，根据power信息控制左侧导航是否显示
    let str = `<div class="itemBox">
            <h3>
                <i class="iconfont icon-yuangong">员工管理</i>
            </h3>
            <nav class="item">
                <a href="page/userlist.html" target="_iframe">员工列表</a>
                ${power.includes("userhandle")?`<a href="page/useradd.html" target="_iframe">新增员工</a>`:""}
            </nav>
    </div>
    <div class="itemBox">
            <h3>
                <i class="iconfont icon-guanliyuan">部门管理</i>
            </h3>
            <nav class="item">
                <a href="page/departmentlist.html" target="_iframe">部门列表</a>
                ${power.includes("departhandle")?`<a href="page/departmentadd.html" target="_iframe">新增部门</a>`:""}
            </nav>
    </div>
    <div class="itemBox">
            ${power.includes("jobhandle")?`<h3>
            <i class="iconfont icon-zhiwuguanli">职务管理</i>
        </h3>
        <nav class="item">
            <a href="page/joblist.html" target="_iframe">职务列表</a>
            ${power.includes("jobhandle")?`<a href=page/jobadd.html" target="_iframe">新增职务</a>`:""}
        </nav>`:``}
    </div>
    <div class="itemBox">
        <h3>
            <i class="iconfont icon-kehuguanli">客户管理</i>
        </h3>
        <nav class="item">
            ${power.includes("allcustomer")?`<a href="page/customerlist.html?lx=all" target="_iframe">全部客户</a>`:""}
            <a href="page/customerlist.html?lx=my" target="_iframe">我的客户</a>
            <a href="page/customeradd.html" target="_iframe">新增客户</a>
        </nav>
    </div>`
    // 除了代码逻辑，还有业务逻辑;
    $(".menuBox").html(str);// 根据角色拼接的字符串放到menuBox元素中
});
// 首页的业务逻辑
$(function(){
    // 这是一个自执行函数
    let $container=$(".container"),
        $header=$(".headerBox"),
        $footer=$(".footerBox"),
        $baseBox = $(".baseBox"),
        $spanName = $baseBox.children("span"),
        $signoutBtn=$baseBox.children("a"),
        $itemBox = $(".itemBox"),
        $navList = $(".navBox a"),
        $iframeBox=$(".iframeBox"),
        $menuBox = $(".menuBox");
    // 1. 计算出container的高度
    function computed(){
        let winH = $(window).height();// 可视窗口的高度
        $container.css("height",winH-$header.outerHeight()-$footer.outerHeight())
    };
    computed();
    $(window).on("resize",computed);

    // 每一次进入首页都需要检测用户是否登录；
    axios.get("/user/login").then(result=>{
        // 如果code为0；说明登录成功
        if(parseFloat(result.code)===0){
            // 如果校验登录成功
            return axios.get("/user/info")
        }
        alert("您还没有登录，请先登录",{
            handled:function(){
                // 如果没有登录，跳转到登录页
                window.location.href="login.html";
            }
        })
    }).then(result=>{
        if(parseFloat(result.code)===0){
            // console.log(result);
            let data = result.data;
            $spanName.html(`欢迎：${data.name}`)
        }
    });

    //  安全退出功能
    $signoutBtn.click(function(){
        // 发送请求告诉服务器，清除session和cookie;
        axios.get("/user/signout").then(result=>{
            if(parseFloat(result.code)===0){
                localStorage.removeItem("power");
                window.location.href="login.html";
                return;
            }
        })
    });


    // DOM 节点： nodeType  nodeValue  nodeName  tagName
    // 基于事件委托，实现左侧折叠菜单
    $menuBox.click(function(e){// 给$menuBox绑定点击事件
        let target = e.target,// e是事件对象，上面有个target属性名是代表点击的元素，也就是事件源；
            tarTag = target.tagName,// 事件源上有个tagName属性名,属性值时大写的标签名
            // console.log(tarTage);       
            $target= $(target);// 把原生的元素对象转成jquery的对象
        if(tarTag==="I"){
            $target.parent().next().slideToggle(300);
        }
    });
    // 当点击组织结构只显示前面3个itemBox 点击客户管理显示最后一个itemBox
    // filterjquery的过滤器，过滤出$itemBox的索引小于3那三个
    let $organise = $itemBox.filter(":lt(3)"),
        $customer = $itemBox.eq(3);
    let initIndex = 0;
    function change(index){
        if(index===0){
            $organise.css("display","block");
            $customer.css("display","none");
            // 给iframeBox这个元素设置src属性，
            $iframeBox.attr("src","page/userlist.html")
        }else{
            $organise.css("display","none");
            $customer.css("display","block");
            $iframeBox.attr("src","page/customerlist.html");
        }
    }
    change(initIndex);
    // 给横向的导航绑定点击事件，把当前a标签的索引传递给change方法；
    $navList.click(function(){
        let index = $(this).index();// 获取当前a标签的在兄弟元素的索引；
        change(index);
    })




    

})
