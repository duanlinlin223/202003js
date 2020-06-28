//这是index.html的js文件
$(function () {
  let power = localStorage.getItem("power"); //获取localStorage中的power
  power = decodeURIComponent(power);
  //console.log(power)
  //左侧导航应该根据权限来生成的;不能写死.
  let str = `
            <div class="itemBox">
                <h3><i class="iconfont icon-yuangong"></i>员工管理</h3>
                <nav class="item">
                    <a href="page/userlist.html" target="_iframe">员工列表</a>
                    ${
                      power.includes("userhandle")
                        ? `<a href="page/useradd.html" target="_iframe">新增员工</a>`
                        : ""
                    }
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
                ${
                  power.includes("jobhandle")
                    ? `<h3>
                <i class="iconfont icon-zhiwuguanli"></i>职务管理
                </h3>
                <nav class="item">
                    <a href="page/joblist.html" target="_iframe">职务列表</a>
                    ${
                      power.includes("jobhandle")
                        ? `<a href="page/jobadd.html" target="_iframe">新增职务</a>`
                        : ""
                    }
                </nav>`
                    : ``
                }
            </div>
            <div class="itemBox">
                <h3><i class="iconfont icon-kehuguanli"></i>客户管理</h3>
				<nav class="item">
					${
						power.includes("allcustomer")
						? `<a href="page/customerlist.html?lx=all" target="_iframe">全部客户</a>`
						: ""
					}
                    <a href="page/customerlist.html?lx=my" target="_iframe">我的客户</a>
                    
                    <a href="page/customeradd.html" target="_iframe">新增客户</a>
                </nav>
            </div>
            `;

  $(".menuBox").html(str); //根据角色拼接的字符串放到左侧导航中
});

//首页的业务逻辑
$(function () {
  //这是一个自执行函数
  //计算出中间区域container的高度
  let $container = $(".container"),
    $header = $(".headerBox"),
    $footer = $(".footerBox"),
    $baseBox = $(".baseBox"),
    $spanName = $baseBox.find("span"),
    $signoutBtn = $baseBox.find("a"),
    $menuBox = $(".menuBox"),
    $itemBox = $(".itemBox"),
    $navlist = $(".navBox a"),
    $iframeBox = $(".iframeBox");
  function computed() {
    let winH = $(window).height();
    $container.css(
      "height",
      winH - $header.outerHeight() - $footer.outerHeight()
    );
  }
  $(window).on("resize", computed);

  //每一次进入首页都需要检测用户是否登陆
  axios
    .get("/user/login")
    .then((result) => {
      // 如果code为0；说明登录成功
      if (parseFloat(result.code) === 0) {
        // 如果校验登录成功
        return axios.get("/user/info");
      }
      alert("您还没有登录，请先登录", {
        handled: function () {
          // 如果没有登录，跳转到登录页
          window.location.href = "login.html";
        },
      });
    })
    .then((result) => {
      if (parseFloat(result.code) === 0) {
        let data = result.data;
        $spanName.html(`欢迎${data.name}`)
      }
    });

  $signoutBtn.click(function () {
    //发送请求告诉服务器清楚session和cookie
    axios.get("/user/signout").then((result) => {
      if (parseFloat(result.code) === 0) {
        localStorage.removeItem("power");
        window.location.href = "login.html";
        return;
      }
    });
  });

  //基于时间委托实现左侧折叠菜单
  $menuBox.click(function (e) {
    let target = e.target,
      tarTag = target.tagName, //获取标签的属性名(大写)
      $target = $(target);  //把原生的元素转成jq的对象
     // console.log(tarTag)
    if (tarTag === "H3") {
      $target.next().slideToggle(300);
    }
  });


  //当点击组织结构只显示前3个itembox，点击客户管理显示最后一个itembox
  //let aa = $(".itemBox:lt(3)")
  let $organise = $itemBox.filter(":lt(3)"),//获取前三个itembox，:lt() 选择器选取 index 值小于指定数字的元素。
      $customer = $itemBox.eq(3); //获取最后一个itembox
  let initIndex = 0;
  function change(index){
    if(index===0){
      $organise.css("display","block")
      $customer.css("display","none")
      $iframeBox.attr("src","page/userlist.html") //如果索引为0就默认显示员工列表页面
    }else{
      $organise.css("display","none")
      $customer.css("display","block")
      $iframeBox.attr("src","page/customerlist.html")//如果为1就默认显示客户管理的首页
    }
  }
  change(initIndex)
  //给横向导航navBox下的a标签绑定点击事件，并把当前a标签的索引传递给change()
  $navlist.click(function(){
    let index = $(this).index();//获取当前a标签的兄弟元素的索引
    change(index)

  })

  //$(".menuBox").children(".itemBox").eq(1).children(".item").append("<a href='page/departmentadd.html' target='_iframe'>新增员工</a>")
});
