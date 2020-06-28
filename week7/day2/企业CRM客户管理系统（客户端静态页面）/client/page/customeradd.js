$(function(){
    let $username = $(".username"),
        $useremail = $(".useremail"),
        $userphone = $(".userphone"),
        $userqq = $(".userqq"),
        $userweixin = $(".userweixin"),
        $inpBox = $(".inpBox"),
        $select = $inpBox.find('select'),
        $textarea = $inpBox.find('textarea'),
        $man = $("#man"),
        $woman = $("#woman"),
        $submit = $(".submit");
        let id = window.location.href.queryURLParams().id;
        //console.log(id)
        
        //获取客户的详细信息
        let queryCusInfo = function(){
            axios.get('/customer/info',{
                params:{
                    customerId:id
                }
            }).then(result=>{
                if(parseFloat(result.code)===0){
                    let data = result.data;
                    console.log(data)
                    let {name,sex,email,phone,QQ,weixin,type,address,userName} = data;
                    $username.val(name)
                    if(parseFloat(sex)===1){
                        $woman.prop("checked",true);
                    };
                    $useremail.val(email);
                    $userphone.val(phone);
                    $userqq.val(QQ);
                    $userweixin.val(weixin);
                    $select.val(type);
                    $textarea.val(address)
                }
            })
        }
        if(id){
            //如果点击的是编辑 表单就默认显示相应的信息
            queryCusInfo();
        }
        let checkName = function(){
            let userNameVal = $username.val().trim();
            let $checkSpan = $username.parent().next("span");
            if(userNameVal.length===0){
                $checkSpan.html('用户名为必填项，不能为空');
                return;
            }
            $checkSpan.html('');
            return true;
        };
        $username.on('blur',checkName);

        //验证邮箱格式
        let checkEmail =function(){
            let  useremailval = $useremail.val().trim();
            let checkEmail = $useremail.parent().next();
            let reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
            if(useremailval.length===0){
                checkEmail.html("邮箱为必填项，不能为空！");
                return;
            }
            if(!reg.test(useremailval)){
                $checkEmail.html("邮箱格式不正确");
                return;
            }
            checkEmail.html("");
            return true;
        }
        $useremail.on("blur",checkEmail)
        

        //手机号验证
    let checkPhone =function(){
        let  userphoneval = $userphone.val().trim();
        let $phoneSpan = $userphone.parent().next();
        if(userphoneval.length===0){
            $phoneSpan.html("电话为必填项，不能为空！");
            return;
        }
        $phoneSpan.html("");
        return true;
    }
    $userphone.on("blur",checkPhone);

    
    $submit.click(function(){
        if(!checkName()||!checkEmail()||!checkPhone()){
            return;
        }
        let url = id?"/customer/update":"/customer/add";
        axios.post(url,{
            //type=xxx
            customerId:id?id:null,
            name:$username.val().trim(),
            sex:$woman.prop("checked")?1:0,
            email:$useremail.val().trim(),
            phone:$userphone.val().trim(),
            QQ:$userqq.val().trim(),
            weixin:$userweixin.val().trim(),
            address:$textarea.val().trim(),
            type:$select.val()
        }).then(result=>{
            if(parseFloat(result.code)===0){
                alert('当前操作成功，即将返回列表页.',{
                    handled:()=>{
                        window.location.href="userlist.html";
                    }
                })
            }
        })
    })
    
})