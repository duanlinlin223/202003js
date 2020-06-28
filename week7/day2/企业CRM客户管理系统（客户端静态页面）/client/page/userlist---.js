$(function(){
    // 获取元素
   let $deleteAll = $(".deleteAll"),
        $tableBox = $(".tableBox"),
        $thead = $tableBox.children("thead"),
        $theadTH  = $thead.find("th"),
        $selectBox = $(".selectBox"),
        $tbody= $tableBox.children("tbody"),
        $searchInp  =$(".searchInp");
    // 先获取power 
    let  power = localStorage.getItem("power");
    power = decodeURIComponent(power);
    let  checkPower =function(){
        // userhandle : 操作用户 ； 不应该有批量的删除的按钮
        if(!power.includes("userhandle")){
            // 字符串includes方法检测字符串是否包含某个字符串，返回一个布尔值
            // 如果没有能够进来这个判断
            $deleteAll.remove();
            $theadTH.eq(0).remove();
            $theadTH.eq($theadTH.length-1).remove();
        }
    }
    checkPower();
    /// 请求所有的用户信息;获取用户前提是下拉框的数据已经绑定完成；一定要在axios.get("/department/list")请求成功以后发送获取用户的请求
    let render=function(){
        // select的value值是选中的option行间属性value的属性值
        let departmentId = $selectBox.val(),
            search = $searchInp.val().trim();
        axios.get("/user/list",{
            params:{
                departmentId,
                search
            }
        }).then(result=>{
            let {code,data}=result;
            console.log(result)
            if(parseFloat(code)===0){
                return data;
            }else{
                // 如果没有匹配到数据的话，code为1；直接返回空数组
                return [];
            }
        }).then(data=>{
            let str = ``;
            // console.log(data);
            // sex: 0 ==> 男  1 ==> 女
            data.forEach(item=>{
                let {id,name,sex,department,job,email,phone,desc}=item;
                str+=`<tr>
                    ${power.includes("userhandle")?`<td class="w3"><input type="checkbox"></td>`:``}
                    <td class="w10">${name}</td>
                    <td class="w5">${parseFloat(sex)===0?"男":"女"}</td>
                    <td class="w10">${department}</td>
                    <td class="w10">${job}</td>
                    <td class="w15">${email}</td>
                    <td class="15">${phone}</td>
                    <td class="w20">${desc}</td>
                    ${power.includes("userhandle")?`<td class="w12">
                        <a href="javascript:;">编辑</a>
                        <a href="javascript:;">删除</a>
                        <a href="javascript:;">重置密码</a>
                    </td>`:``}
                </tr>`
            });
            $tbody.html(str);
        }).then(()=>{
            handleCheckbox();// 数据是异步请求，还没有绑定成功；所以获取不到tbody中的input;
        });
    }
    // 请求下拉框的数据
    let selectBind=function(){
        return  axios.get("/department/list").then(result=>{
            if(parseFloat(result.code)===0){
                let  str = `<option value="0">全部</option>`;
                result.data.forEach(item => {
                     str+=`<option value="${item.id}">${item.name}</option>`
                });
                $selectBox.html(str);
            }
        })
    }
    selectBind().then(()=>{
        // render一定是在
        render();
    });

    // 点击全选；都选中或者都不选中
    // 点击其中一个input,当所有input都选中，全选被选中，只要一个没选中，那么全选就不选中
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
                console.log($checks)
                $checks.prop("checked",$(this).prop("checked"));
            });
            // 给每一个tbody中的input绑定点击事件；不需要循环
            $checks.click(function(){
                // 只要有一个input的checked是false，那么全选就是false；
                let flag = true;
                $checks.each((index,item)=>{
                    if($(item).prop("checked")===false){
                        flag = false;
                        return;// 中止循环
                    }
                })
                $checkHead.prop("checked",flag);
            })
    };
    // 根据下拉框和搜索框中的内容筛选对应的数据
    let  handleFilter = function(){
        // 当更改了select中的值时，重新调用render方法，去进行请求且数据绑定
        $selectBox.on("change",render);
        $searchInp.on("keydown",function(e){
            if(e.keyCode===13){
                // 如果是13 说明按下了enter键
                render();  
            }
        })
    }
    handleFilter();


    
})