$(function(){
    let $tableBox = $(".tableBox"),
        $tbody = $tableBox.find("tbody"),
        $visitTime = $(".visitTime"),
        $submit = $(".submit"),
        $visitText = $(".visitText");

    let id = window.location.href.queryURLParams().id;
   
    var time = new Date();
    var day = ("0" + time.getDate()).slice(-2);
    var month = ("0" + (time.getMonth() + 1)).slice(-2);
    var today = time.getFullYear() + "-" + (month) + "-" + (day);
    $visitTime.val(today)
    //console.log(id);
    
    //获取回访列表
    let GetVisitList = function(){
        axios.get('/visit/list',{
            params:{
                customerId:id
            }
        }).then(result=>{
            //console.log(result)
            if (parseFloat(result.code)===0) {
                let data = result.data;
                //console.log(data)
                let str = ``;
                data.forEach(item=>{
                    str+= `
                        <tr data-id="${item.id}">
                            <td class="w5">${item.id}</td>
                            <td class="w15">${item.visitTime}</td>
                            <td class="w70 wrap" style="width: 60%;">${item.visitText}</td>
                            <td class="w10" style="width: 20%;">
                                <a href="javascript:;">查看</a>
                                <a href="javascript:;">编辑</a>
                                <a href="javascript:;">删除</a>
                            </td>
                        </tr>
                    `
                }) 
                $tbody.html(str)
            }
        })
   }
    GetVisitList();
    //删除回访
    let deleteFn=function(){
        $tbody.click(function(e){
            let target = e.target,
                tarTag = target.nodeName,
                tarVal = target.innerText,
                $target = $(target);
            let $grandParent = $target.parent().parent();
            let visitId=$grandParent.attr("data-id");
            if(tarTag==='A' && tarVal==="删除"){
                alert(`确定要删除编号为${visitId}吗?`,{
                    title:"当前操作很重要",
                    confirm:true,
                    handled:function(msg){
                        if(msg==="CONFIRM"){
                            axios.get('/visit/delete/',{
                                params:{
                                    visitId
                                }
                            }).then(result=>{
                                if(parseFloat(result.code)===0){
                                    GetVisitList();
                                }
                            })
                        }
                    }
                })
            };

            
        })
    }
    deleteFn();

    let fn=function(visitId){
        if (!visitId) {
            url = "/visit/add"
        } else {
            url = "/visit/update";
        }
        $submit.click(function(){
            if($visitText.val()===''){
                alert('请输入信息')
                return;
            }
            axios.post(url,{
                visitId:visitId?visitId:null,
                customerId:id,
                visitText:$visitText.val().trim(),
                visitTime:$visitTime.val().trim()
            }).then(result=>{
                if(parseFloat(result.code)===0){
                    window.location.href=`visit.html?customerId=${id}`
                }
            })
        })
    }
    fn();

    //编辑
    let editInfo=function(){
        $tbody.click(function(e){

            let target = e.target,
                tarTag = target.nodeName,
                tarVal = target.innerText,
                $target = $(target);

            let $grandParent = $target.parent().parent();
                visitId =$grandParent.attr("data-id")
            //let customerId=$(this).find("a").eq(0).attr("data-id");
            if(tarTag==='A' && tarVal==="编辑"){
                $visitTime.val($grandParent.children(".w15").html().trim())
                $visitText.val($grandParent.children(".w70").html().trim());
                fn(visitId);
            }
        })
    }
    editInfo();
})