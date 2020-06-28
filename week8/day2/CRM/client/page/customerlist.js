$(function(){
    let  $selectBox = $(".selectBox"),
         $searchInp = $(".searchInp"),
         $tableBox = $(".tableBox"),
         $tbody = $tableBox.find("tbody"),
         $pageBox = $(".pageBox");
    let lx = window.location.href.queryURLParams().lx;
    let limit = 10;
    let page = 1;
    // ajax 分页： 新能高；
    let render = function(){
        console.log($selectBox.val());
        axios.get("/customer/list",{
            params:{
                lx:lx,
                type:$selectBox.val(),
                search:$searchInp.val(),
                limit,
                page
            }
        }).then(result=>{
            // console.log(result);
            let {code,totalPage,data}=result;
            if(parseFloat(code)===0){
                let str = ``;
                data.forEach(item=>{
                    str+=`<tr>
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
                                <a href="customeradd.html">编辑</a>
                                <a href="javascript:;">删除</a>
                                <a href="visit.html">回访记录</a>
                            </td>
                    </tr>`
                });
                $tbody.html(str);
                // 渲染表格下面的分页数据
                str  = ``;
                // 如果page大于1，则有上一页
                str+=page>1?`<a href="javascript:;">上一页</a>`:null;
                str+=`<ul class="pageNum">`;
                for(let i=1;i<=totalPage;i++){
                    str+=`<li class="${page===i?'active':''}">${i}</li>`
                }
                str +=`</ul>`;
                page<totalPage?str+=`<a href="javascript:;">下一页</a>`:null;
                $pageBox.html(str);
            }
        })
    }
    render();

     // 下拉切换筛选客户
    $selectBox.on("change",function(){
        render(); 
    });  
    
    // input框回车键重新搜索
    $searchInp.on("keydown",function(e){
        if(e.keyCode===13){
            render();
        }
    });

    // 利用事件委托绑定点击事件
    $pageBox.click(function(e){
        let targetTag = e.target.tagName,
            targetVal  = e.target.innerHTML;
        // 说明点击的是上一页或下一页
        // 通过控制page来render，从而达到重新渲染最新的数据的功能
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
})