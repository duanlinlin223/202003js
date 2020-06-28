$(function(){
    //获取元素
    let $userdepartment = $(".userdepartment"),
        $userjob = $(".userjob"),
        $username = $(".username"),
        $spanusername =$(".spanusername"),
        $man = $("#man"),
        $woman = $("#woman"),
        $useremail = $(".useremail"),
        $spanuseremail = $(".spanuseremail"),
        $userphone = $(".userphone"),
        $spanuserphone = $(".spanuserphone"),
        $userdesc = $(".userdesc"),
        $submit =$(".submit");
    //对部门和职务的下拉框，通过请求数据进行赋值
    let selectBind = function(){
        let promise1 = axios.get('/department/list');
        let promise2 = axios.get('/job/list');
        axios.all([promise1,promise2]).then(result=>{
            //axios.all当上面两个请求都成功之后会执行then方法，并且将两次请求的数据用数组包起来，传给了then的第一个参数
            //部门信息绑定
            let [departmentResult,jobResult]=result;
            if(parseFloat(departmentResult.code)===0){
                let str = ``;
                departmentResult.data.forEach(item=>{
                    str += `<option value="${item.id}">${item.name}</option>`
                })
                $userdepartment.html(str)
            }
            //获取职务信息
            if(parseFloat(jobResult.code)===0){
                let str1 = ``;
                jobResult.data.forEach(item=>{
                    str1 += `<option value="${item.id}">${item.name}</option>`
                })
                $userjob.html(str1)
            }

        })
    }
    selectBind();
    //获取当前页面有没有userId 这个参数，如果有的话那么就是在员工列表页点击编辑过来的，如果没有就是点击右侧新增员工进来的
    //queryURLParams()取到userId
    //input框进行赋值

    let queryBaseInfo = function(){
        axios.get('/user/info',{
            params:{
                userId
            }
        }).then(result=>{
            if(parseFloat(result.code)===0){
               let {name,sex,email,phone,departmentId,jobId,desc} =result.data;
                $username.val(name);
                if(parseFloat(sex)===1){
                    $woman.prop("checked",true);
                }
                $useremail.val(email)
                $userphone.val(phone)
                $userdesc.val(desc)
                $userjob.val(jobId)
                $userdepartment.val(departmentId)
            }
        })
    }
    let userId = window.location.href.queryURLParams().userId;
    //console.log(userId)
    if(userId){
        queryBaseInfo()
    }
    //在修改以后，提交之前，当input框是去焦点，立即对input进行校验是否为空
    let checkUserName = function(){
        let usernameVal = $username.val().trim();
        if(usernameVal.length===0){
            $spanusername.html('用户名为必填项，不能为空');
            return;
        }
        $spanusername.html('');
        return true;
    }
    //失去鼠标焦点就执行
    $username.on('blur',checkUserName);
    //邮箱验证
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
        return true;
    }
    $useremail.on("blur",checkEmail)

    //手机号验证
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
        return true;
    }
    $userphone.on("blur",checkPhone);

    //给确认提交绑定点击事件
    $submit.click(function(){
        //进行判断上面校验是否成功,如果上面三个校验都成功，才发送请求
        // if(checkUserName()&&checkEmail()&&checkPhone()){
        //     axios.post();

        // }
        if(!checkUserName()||!checkEmail()||!checkPhone()){
            return;
        }
        //如何进行是新增还是修改的判断呢？根据userId有没有就行
        let url = userId?"/user/update":"/user/add";
        //livesever启动服务发送post请求，会自动刷新页面;
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
            //后端已经让跳回到列表页了不需要在操作跳转了
        
            if(parseFloat(result.code)===0){
                alert('当前操作成功，即将返回列表页.',{
                    handled:()=>{
                        window.location.href="userlist.html";
                    }
                })
            }
        });
    })
})