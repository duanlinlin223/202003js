$(function(){
    let urlData = window.location.href;
        urlData = decodeURIComponent(urlData);
    let urlResult = urlData.queryURLParams(),
        userId = urlResult.userId,
        $username = $(".username"),
        $useremail = $(".useremail"),
        $userdesc = $(".userdesc"),
        $userphone = $(".userphone"),
        $userjob = $(".userjob"),
        $userdepartment = $(".userdepartment"),
        $userJob = $(".userjob"),
        $submit = $(".submit");
        //获取部门信息
        function getDepartment(){
            axios.get('/department/list').then(result=>{
                if(parseFloat(result.code)===0){
                    let str=`<option value="0">全部</option>`
                    result.data.forEach(item=>{
                        str+= `<option value="${item.id}">${item.name}</option>`  
                    })
                    $userdepartment.html(str)
                }
                
            })
        }
        getDepartment()

        //获取职务信息
        function getJob(){
            axios.get('/job/list').then(result=>{
                if(parseFloat(result.code)===0){
                    let str=`<option value="0">全部</option>`
                    result.data.forEach(item=>{
                        str+= `<option value="${item.id}">${item.name}</option>`  
                    })
                    $userJob.html(str)
                }
                
            })
        }
        getJob()
    if(userId){
        //修改员工信息给表单添加默认信息 
        axios.get('/user/info',{
            params:{
                userId:userId
            }
        }).then(result=>{
            if(parseFloat(result.code)===0){
                let {id,name,sex,departmentId,jobId,email,phone,desc} = result.data;
                //console.log(job)
                $username.val(name);
                $useremail.val(email);
                $userdesc.val(desc)
                $userphone.val(phone)
                $userjob.val(jobId)
                $userdepartment.val(departmentId)
                //根据sex的值，设置用户的性别
                if(sex=="1"){
                    $(".inpBox input[id='woman']").prop("checked",'checked')
                }else{
                    $(".inpBox input[id='man']").prop("checked",'checked')
                }
                
            }
        });

        $submit.click(function(){
            let name = $username.val(),
                email= $useremail.val(),
                phone = $userphone.val(),
                desc =  $userdesc.val(),
                jobId = $userjob.val(),
                sex = $(".inpBox input[name='sex']:checked").attr("id"),
                departmentId = $userdepartment.val();
                
                if(sex==="man"){
                    sex=0
                }else{
                    sex=1
                }
            axios.post('/user/update',{
                    userId,
                    name,
                    email,
                    phone,
                    desc,
                    jobId,
                    sex,
                    departmentId
            }).then(result=>{
                if(parseFloat(result.code)===0){
                    
                    alert('修改信息成功')
                }else{
                    alert('修改信息失败')
                }
            })
        })
    }

    $submit.click(function(){
        let name = $username.val(),
            email= $useremail.val(),
            phone = $userphone.val(),
            desc =  $userdesc.val(),
            jobId = $userjob.val();
            departmentId = $userdepartment.val()
            sex= $(".inpBox input[name='sex']:checked").attr("id");
            if(sex==="man"){
                sex="男"
            }else{
                sex="女"
            }
        if(name==''|| email =='' || phone==''){
            alert('请填写内容')
        }
        axios.post('/user/add',{
            name,
            email,
            phone,
            desc,
            jobId,
            sex,
            departmentId
        }).then(result=>{
            if(parseFloat(result.code)===0){
                window.location.href="userlist.html"
            }
        })
    })
})
