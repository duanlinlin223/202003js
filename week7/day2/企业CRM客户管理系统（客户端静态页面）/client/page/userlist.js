$(function(){
    let $deleteAll = $(".deleteAll"),
        $tableBox = $(".tableBox"),
        $thead = $tableBox.children("thead"),
        $theadTh = $thead.find("th"),
        $selectBox = $(".selectBox"),
        $searchInp = $(".searchInp"),
        $tbody = $tableBox.children("tbody");
    //现获取power
    let power= localStorage.getItem("power")
    

    power = decodeURIComponent(power)
    //console.log(power)
    let checkPower = function(){
        //userhandle:用户权限，是否有这个字段，如果没有就批量删除权限
        if(!power.includes("userhandle")){
            //inclides方法检测字符串是否包含某个字符直接返回一个布尔值
            //如果没有能够进来这个判断
            $deleteAll.remove();
            $theadTh.eq(0).remove();
            $theadTh.eq($theadTh.length-1).remove();
        }

    }
    checkPower();


    //请求所有的用户信息
    let render = function(){
        //select的value值是选中的option的行间属性value的值
        let departmentId = $selectBox.val(),
            search = $searchInp.val().trim();
        axios.get('/user/list',{
            params:{
                departmentId,
                search
            }
        }).then(result=>{
            //console.log(result)
            let {code,data}=result;
            //console.log(data)
            if(parseFloat(code) === 0){
                return data
            }else{
                //console.log(data)
                return [];
                
            }
        }).then(data=>{
            let str = ``;
            data.forEach(item=>{ 
                let {id,name,sex,department,job,email,phone,desc}=item;//解构，设置变量和item内的变量名相等，并且一一对应找到相应的属性名
                str +=`<tr data-id="${id}" data-name="${name}">
                        ${power.includes("userhandle")?`<td class="w3"><input type="checkbox"></td>`:``}
                        <td class="w10">${name}</td>
                        <td class="w5">${parseFloat(sex)===0?"男":"女"}</td>
                        <td class="w10">${department}</td>
                        <td class="w10">${job}</td>
                        <td class="w15">${email}</td>
                        <td class="15">${phone}</td>
                        <td class="w20">${desc}</td>
                        ${power.includes("userhandle")?`<td class="w12">
                                <a href="useradd.html?userId=${id}">编辑</a>
                                <a href="javascript:;">删除</a>
                                ${power.includes("resetpassword")?`<a href="javascript:;">重置密码</a>`:``}
                                </td>`:``}
                    </tr>`
            })
            $tbody.html(str)
        }).then(()=>{
            handleCheckbox()//数据异步请求，还没绑定成功，获取不到tbody中的input的值
        })
    }

    //请求下拉框的数据
    let selectBing=function(){
        //  /department/list
        return axios.get('/department/list').then(result=>{
            if(parseFloat(result.code)===0){
                let str=`<option value="0">全部</option>`
                result.data.forEach(item=>{
                    str+= `<option value="${item.id}">${item.name}</option>`
                    $selectBox.html(str)
                })
            }
        })
    }
    selectBing().then(()=>{
        render()
    })

    //点击全选;都选中或者都不选中
    //点击下面的input框 ，当全部选中时  上面的全选按钮才全选
    let handleCheckbox = function(){
        let $checkHead = $thead.find("input[type='checkbox']"),
            $checks = $tbody.find("input");//这是个集合
            //console.log($checks)
            //给全选绑定点击
            $checkHead.click(function(){
                //this是点击全选，this==>原生的dom元素，$(this)是转换成jq实例
                //prop设置行间实行
                $checks.prop("checked",$(this).prop("checked"))
            })
            //给每一个tbody中的input绑定点击，不需要循环
            $checks.click(function(){
                let flag = true;
                $checks.each((index,item)=>{
                    if($(item).prop("checked")===false){
                        flag=false;
                        return;//终止循环
                    }
                })
                $checkHead.prop("checked",flag)
            })
    }

    //根据下拉框和搜索框内容筛选对应的数据
    let handleFilter = function(){
        $selectBox.on('change',render)
        //console.log(render)
        $searchInp.on('keydown',function(e){
            if(e.keyCode===13){
                render();
            }
        })
    }
    handleFilter();
    
    //删除一个
    function deleteX(index,$selects){
        let $item = $selects.eq(index), //获取到当前选中的input
            userId= $item.parent().parent().attr("data-id"); //找到当前点击的input的外层tr，并获取到tr行内的id
            
        axios.get('/user/delete',{
            params:{
                userId:userId
            }
        }).then(result=>{
            if(parseFloat(result.code)===0){
                deleteX(index+1,$selects)
            }
        })
    };
    $deleteAll.click(function(){
        let  $selects = $tbody.find("input[type='checkbox']").filter((index,item)=>{
            return $(item).prop("checked");
        });
        if($selects.length===0){
            alert("请您先选中要删除的内容");
            return;
        }
        alert(`您确定要删除${$selects.length}项信息吗？`,{
            title:"警告,当前操作很重要",
            confirm:true,// 这个属性控制了确定和取消按钮；
            handled:(msg)=>{// 这个函数当点击确定时，会执行此函数
                // console.log(msg) 如果这是CONFIRM 说明点击的是确定，如果CANCEL 说明点击的是取消
                if(msg!=="CONFIRM")return;
                deleteX(0,$selects)  
            }
        });
    })
    
    //利用事件委托处理员工的操作
    let handleDelegate=function(){
        $tbody.click(function(e){
            let target = e.target,
                tarTag = target.nodeName,
                tarVal = target.innerText,
                $target = $(target);
            let $grandParent = $target.parent().parent();
            let userId = $grandParent.attr('data-id');
            let userName = $grandParent.attr('data-name');
            
            //删除
            if(tarTag==='A' && tarVal==="删除"){
                alert(`确定要删除${userName}吗?`,{
                    title:"当前操作很重要",
                    confirm:true,
                    handled:function(msg){
                        if(msg==="CONFIRM"){
                            axios.get('/user/delete',{
                                params:{
                                    userId
                                }
                            }).then(result=>{
                                //console.log(result)
                                if(parseFloat(result.code)===0){
                                    render();
                                }
                            })
                        }
                    }
                })
            };
            //密码重置
            if(tarTag==="A"&&tarVal==="重置密码"){
                alert(`确定要把${userName}的密码重置吗`,{
                    title:"警告，当前操作很重要",
                    confirm:true,
                    handled:msg=>{
                        if(msg === "CONFIRM"){
                            axios.post('/user/resetpassword',{
                                userId,
                                password:"999"
                            }).then(result=>{
                                if(parseFloat(result.code)===0){
                                    alert("密码修改成功")
                                }else{
                                    alert('密码修改失败')
                                }
                            })
                        }
                    }
                })
            }
        })
    }
    handleDelegate()

})