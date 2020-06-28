$(function(){
    let $tableBox = $(".tableBox"),
    $tbody = $tableBox.find('tbody');
    let renderList = function(){
        axios.get('/job/list').then(result=>{
            if(parseFloat(result.code)===0){
                let data = result.data;
                // console.log(data)
                let str = ``;
                data.forEach(item=>{
                    str += `<tr data-id='${item.id}'>
                                <td class="w8">${item.id}</td>
                                <td class="w10">${item.name}</td>
                                <td class="w20">${item.desc}</td>
                                <td class="w50">${item.power}</td>
                                <td class="w12">
                                    <a href="jobadd.html?id=${item.id}">编辑</a>
                                    <a href="javascript:;">删除</a>
                                </td>
                            </tr>`
                })
                $tbody.html(str)
            }
        })
    }
    renderList();

    $tableBox.click(function(e){
        let target = e.target,
            tarTag = target.nodeName,
            tarVal = target.innerText,
            $target = $(target);
            let $grandParent = $target.parent().parent();
            let jobId = $grandParent.attr('data-id');
            if(tarTag==="A"&&tarVal==="删除"){
                alert('确定要删除此项吗?',{
                    title:'当前操作很重要',
                    confirm:true,
                    handled:function(msg){
                        if(msg =="CONFIRM"){
                            axios.get('/job/delete',{
                                params:{
                                    jobId
                                }
                            }).then(result=>{
                                if(parseFloat(result.code)===0){
                                    renderList();
                                }
                            })
                        }
                    }
                })
            }
        
    })
    
})