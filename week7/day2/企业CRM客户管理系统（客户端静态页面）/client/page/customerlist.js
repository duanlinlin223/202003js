$(function(){
    let  $selectBox = $(".selectBox"),
         $searchInp = $(".searchInp"),
         $tableBox = $(".tableBox"),
         $tbody = $tableBox.find("tbody"),
         $pageBox = $(".pageBox");
    let lx = window.location.href.queryURLParams().lx;
    let limit = 10;
    let page = 1;
    // ajax 分页： 性能高；
    let render = function(){
        axios.get("/customer/list",{
            params:{
                lx:lx,
                type:$selectBox.val(),
                search:$searchInp.val(),
                limit,
                page
            }
        }).then(result=>{
            //console.log(result);
            let {code,totalPage,data}=result;
            if(parseFloat(result.code)===0){
                let str = ``;
                data.forEach(item=>{
                    str+=`<tr data-id="${item.id}>
                            <td class="w8">${item.name}</td>
                            <td class="w5">${parseFloat(item.sex)==1?"女":"男"}</td>
                            <td class="w10">${item.email}</td>
                            <td class="w10">${item.phone}</td>
                            <td class="w10">${item.weixin}</td>
                            <td class="w10">${item.QQ}</td>
                            <td class="w5">${item.type}</td>
                            <td class="w8">${item.userName}</td>
                            <td class="w20">${item.address}</td>
                            <td class="w14">
                                <a href="customeradd.html?id=${item.id}">编辑</a>
                                <a href="javascript:;">删除</a>
                                <a href="visit.html?id=${item.id}">回访记录</a>
                            </td>
                    </tr>`
                });
                $tbody.html(str)
                //渲染表格下面的分页数据
                str = ``;
                str += page>1?`<a href="javascript:;">上一页</a>`:null;
                str += `<ul class="pageNum">`
                    for(let i = 1;i<=totalPage;i++){
                        str+= `<li class="${page===i?'active':''} ">${i}</li>`
                    }
                str += `</ul>`
                page<totalPage?str+=`<a href="javascript:;">下一页</a>`:null;
                $pageBox.html(str);

            }
        })
    }
    render();
    //下拉框切换筛选客户
    $selectBox.on('change',function(){
        render()//重新渲染数据
    })
    $searchInp.on('keydown',function(e){
        if(e.keyCode===13){
            render();
        }
    })

    //利用事件委托绑定点击事件
    $pageBox.click(function(e){
        let targetTag = e.target.tagName;
            targetVal = e.target.innerHTML;
        //判断点击的是什么
        //通过控制page来render，从而达到重新渲染最新数据的功能；
        if(targetTag==="A"){
            if(targetVal==="上一页"){
                page--;
            }
            if(targetVal==="下一页"){
                page++;
            }
            render();
            return;
        }
        if(targetTag==="LI"){
            page = parseFloat(targetVal);
            render();
        }
    });

    //删除客户  
    $tableBox.click(function(e){
        let target = e.target,
            tarTag = target.nodeName,
            tarVal = target.innerText,
            $target = $(target);
        let $grandParent = $target.parent().parent();
        let customerId = $grandParent.attr('data-id');
        if(tarTag==="A"&&tarVal==="删除"){
            alert('警告，确定要删除此项吗',{
                title:'当前操作很重要',
                confirm:true,
                handled:function(msg){
                    //console.log(msg)
                    //console.log(msg)
                    if(msg==="CONFIRM"){
                        console.log(msg)
                        axios.get('/customer/delete',{
                            params:{
                                customerId
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
        }
    })

})