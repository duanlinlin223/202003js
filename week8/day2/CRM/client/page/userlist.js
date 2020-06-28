// 先写一个闭包函数
$(function(){
    // 获取元素
    let $deleteAll = $(".deleteAll"),
        $tableBox = $(".tableBox"),
        $thead = $tableBox.children("thead"),
        $theadTH = $thead.find("th"),
        $selectBox = $(".selectBox"),
        $tbody = $tableBox.children("tbody"),
        $searchInp = $(".searchInp");
    // 先获取power
    let power = localStorage.getItem("power");
    power = decodeURIComponent(power);
    let checkPower = function(){
        // userhandle：操作用户；如果没有userhandle，不应该有批量删除的按钮和最后一列操作列
        if(!power.includes("userhandle")){
            // 字符串includes方法检测字符串是否包含某个字符串，直接返回一个布尔值
            // 如果没有能够进来这个判断
            $deleteAll.remove();
            $theadTH.eq(0).remove();
            $theadTH.eq($theadTH.length-1).remove();
        };
    };
    checkPower();
    // 请求所有的用户信息:获取用户信息的前提是下拉框的数据已经绑定完成；一定要在axios.get("/department/list")请求成功之后发送获取用户的请求
    let render  = function(){
        // select的value值是选中的option行间属性value的属性值
        let departmentId = $selectBox.val(),
            search = $searchInp.val();
        axios.get("/user/list",{
            params:{
                // 参数：前端告诉后端的信息
                departmentId,
                search
            }
        }).then(result=>{
            let {code,data}=result;
            // console.log(result)
            if(parseFloat(code)===0){
                // 说明成功了
                return data;
            }else{
                // 如果没有匹配到数据的话，code为1，直接返回空数组
                return [];
            }
        }).then(data=>{
            let str = ``;
            // console.log(data);
            // sex:0=>男   1=>女
            data.forEach(item=>{
                let {id,name,sex,department,job,email,phone,desc} = item;
                str += `<tr data-id="${id}" data-name="${name}">
                ${power.includes("userhandle")?`<td class="w3"><input type="checkbox">
                    </td>`:``}
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
            $tbody.html(str);
        }).then(()=>{
            handleCheckbox();
        })
    }
    render();
    // 请求下拉框的数据
    let selectBind = function(){
        return axios.get("/department/list").then(result=>{
            if(parseFloat(result.code)===0){
                let str = `<option value="0">全部</option>`;
                result.data.forEach(item=>{
                    str += `<option value="${item.id}">${item.name}</option>`
                });
            $selectBox.html(str);
            };
        }).then(()=>{
            handleCheckbox();  // 数据是异步请求，还没有绑定成功，所以获取不到tbody中的input；
        })
    };
    selectBind().then(()=>{
        // rennder一定是
        // render();
    });
    // 点击全选；都选中或者都不选中
    // 点击其中一个input，当所有的input都选中，全被选中，只要一个没选中，那么全选就不选中
    let  handleCheckbox = function(){
        let $checkHead = $thead.find("input[type='checkbox']"),
             $checks = $tbody.find("input");// 这是一个集合
        // console.log($checkHead.prop("checked"))// 获取是一个boolean值；
        // console.log( $checks)
        // // 给全选绑定点击
        $checkHead.click(function(){
            // this 是点击的全选 this==> 原生的DOM元素； $(this)=>jquery的实例
            // prop:设置行间属性    attr : 设置行间   setAttribute:
            // 设置行间属性
            // console.log($checks)
            $checks.prop("checked",$(this).prop("checked"));
        });
        // 给每一个tbody中的input绑定点击事件；不需要循环
        $checks.click(function(){
            // 只要有一个的check是false，那么全选就是false
            let flag = true;
            $checks.each((index,item)=>{
                if($(item).prop("checked")===false){
                    flag = false;
                    return;  // 终止循环
                }
            })
            $checkHead.prop("checked",flag);
        });
    };
    // 根据下拉框和搜索框中的内容筛选对应的数据
    let handleFilter = function(){
        // 当更改了select中的值时，重新调用render中的方法，请求且数据绑定
        $selectBox.on("change",render);
        $searchInp.on("keydown",function(e){
            if(e.keyCode===13){
                // 如果是13，说明按下了enter键
                render();
            }
        })
    };
    handleFilter();
    // 实现批量删除
        //删除一个
        function deleteX(index,$selects){// 0  
            let $item=$selects.eq(index),// 获取到当前的input
            userId = $item.parent().parent().attr("data-id");
            console.log(userId)
            axios.get("/user/delete",{
                params:{
                    userId
                }
            }).then(result=>{
                if(parseFloat(result.code)===0){
                    // 利用递归，逐个+1，向上删除；
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
    });
    //利用事件委托处理员工的操作
    let handleDelegate = function(){
        $tbody.click(function(e){
            let target = e.target,
                tarTag = target.nodeName,
                tarVal = target.innerHTML,
                $target = $(target);
            let $grandparent = $target.parent().parent();
            let userId = $grandparent.attr("data-id");
            let userName = $grandparent.attr("data-name")
            // 删除
            if(tarTag==="A"&&tarVal==="删除"){
                alert(`确定要删除${userName}吗？`,{
                    title:"警告，当前操作不可逆",
                    confirm:true,
                    handled:msg=>{
                        if(msg==="CONFIRM"){
                            axios.get("/user/delete",{
                                params:{
                                    userId
                                }
                            }).then(result=>{
                                if(parseFloat(result.code)===0){
                                    render();
                                }
                            })
                        }
                    }
                })
            }
            // 重置密码
            if(tarTag==="A"&&tarVal==="重置密码"){
                alert(`确定要把${userName}的密码重置吗?`,{
                    title:"警告，当前操作不可逆",
                    confirm:true,
                    handled:msg=>{
                        if(msg==="CONFIRM"){
                            axios.get("/user/resetpassword",{
                                userId,
                                password:"88888888"
                            }).then(result=>{
                                if(parseFloat(result.code===0)){
                                    // console.log(1111)
                                    alert("修改成功")
                                }else{
                                    alert("修改失败")
                                }
                            })
                        }
                    }
                })
            }
        })
    }
    handleDelegate();
})