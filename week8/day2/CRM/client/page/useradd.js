$(function(){
    // 获取元素
    let $userdepartment = $(".userdepartment"),
        $userjob=$(".userjob"),
        $username = $(".username"),
        $spanusername  = $(".spanusername"),
        $man  = $("#man"),
        $woman=$("#woman"),
        $useremail  = $(".useremail"),
        $spanuseremail = $(".spanuseremail"),
        $userphone  = $(".userphone"),
        $spanuserphone = $(".spanuserphone"),
        $userdesc = $(".userdesc"),
        $submit = $(".submit");

    // 对部门和职务下拉框通过请求数据，进行赋值
    let  selectBind=function(){
        let  promise1 = axios.get("/department/list");
        let  promise2 = axios.get("/job/list");
        axios.all([promise1,promise2]).then(result=>{
            // axios.all : 当上面两个请求都成功以后，会执行这个then方法，并且将两次请求的数据数组包起来，传给了then的第一个参数
            // console.log(result);
            // 部门信息绑定
            let  [departmentResult,jobResult]= result;
            if(parseFloat(departmentResult.code)===0){
                let str=``;
                departmentResult.data.forEach(item=>{
                    str+=`<option value="${item.id}">${item.name}</option>`
                });
                $userdepartment.html(str);
            }
            // 职务信息绑定
            if(parseFloat(jobResult.code)===0){
                let str=``;
                jobResult.data.forEach(item=>{
                    str+=`<option value="${item.id}">${item.name}</option>`
                });
                $userjob.html(str);
            }
        })
    }
    selectBind();

    // 获取当前页面有没有传过来uerId这个参数，如果有的话，那么就是在员工列表页点击编辑进来的,如果没有就是点击左侧新增员工；
    // queryURLParams : 这个方法是将？后面的参数取到；
    // 对input框进行赋值
    let  queryBaseInfo = function(){
        axios.get("/user/info",{
            params:{
                userId
            }
        }).then(result=>{
            if(parseFloat(result.code)===0){
                let {name,sex,email,phone,departmentId,jobId,desc}=result.data;
                $username.val(name);
                if(parseFloat(sex)===1){
                    $woman.prop("checked",true);
                }
                $useremail.val(email);
                $userphone.val(phone);
                $userdesc.val(desc);
                $userdepartment.val(departmentId);
                $userjob.val(jobId)
            }
        })
    }
    let userId = window.location.href.queryURLParams().userId;
    console.log(window.location.href);
    if(userId){
        queryBaseInfo();
    }  
    // 在修改以后，提交之前，当input框失去鼠标焦点，立即对此input框进行校验是否非空
    let  checkUserName = function(){
        let usernameVal = $username.val().trim();
        if(usernameVal.length===0){
            $spanusername.html("用户名为必填项，不能为空！");
            return;
        }
        $spanusername.html("");
        return  true;
    }
    // 失去鼠标焦点就执行
    $username.on("blur",checkUserName);

    // 邮箱验证
    let checkEmail =function(){
        let  useremailval = $useremail.val().trim();
        let reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
        if(useremailval.length===0){
            $spanuseremail.html("邮箱为必填项，不能为空！");
            return;
        }
        if(!reg.test(useremailval)){
            $spanuseremail.html("邮箱格式不正确");
            return;
        }
        $spanuseremail.html("");
        return  true;
    }
    $useremail.on("blur",checkEmail);

    let checkPhone =function(){
        let  userphoneval = $userphone.val().trim();
        let reg = /^1\d{10}$/;
        if(userphoneval.length===0){
            $spanuserphone.html("电话为必填项，不能为空！");
            return;
        }
        if(!reg.test(userphoneval)){
            $spanuserphone.html("电话格式不正确");
            return;
        }
        $spanuserphone.html("");
        return  true;
    }
    $userphone.on("blur",checkPhone);

    // 给确认提交绑定点击事件
    $submit.click(function(){
        // 进行判断，上面校验是否成功
        // 确保三个校验都是成功的发送请求
        /// 只要有一个是false,就不走post;
        // if(checkUserName()&&checkEmail()&&checkPhone()){
        //     axios.post();
        // }
        // 只要有一个是false,那么就走return，也就不走post;除非都是true，就走post
        if(!checkUserName()||!checkEmail()||!checkPhone()){return};
        // 如果进行是新增还是修改的判断呢？
        let url = userId?"/user/update":"/user/add";
        // liveServer启动服务发送post请求会刷新页面； 是vscode帮助咱们启动服务用的；
        axios.post(url,{
            userId:userId?userId:null,
            name:$username.val().trim(),
            sex:$woman.prop("checked")?1:0,
            email:$useremail.val().trim(),
            phone:$userphone.val().trim(),
            departmentId:$userdepartment.val(),
            jobId:$userjob.val(),
            desc:$userdesc.val().trim()
        }).then(result=>{
            if(parseFloat(result.code)===0){
                window.location.href="userlist.html";
            }
        })
    })

})