$(function(){

    let $tableBox = $(".tableBox"),
        $tbody = $tableBox.find('tbody');
    let render = function(){
        axios.get('/department/list').then(result=>{
            let data = result.data;
            //console.log(data)
            let str = ``;
            data.forEach(item=>{
                str += `<tr data-id="${item.id}">
                        <td class="w10" >${item.id}</td>
                        <td class="w20">${item.name}</td>
                        <td class="w40">${item.desc}</td>
                        <td class="w20">
                            <a href="departmentadd.html?id=${item.id}" target="_iframe">编辑</a>
                            <a href="javascript:;">删除</a>
                        </td>
                    </tr> `
            })
            $tbody.html(str);

        })
    };
    render();
    $tableBox.click(function(e){
        let target = e.target,
            tarTag = target.nodeName,
            tarVal = target.innerText,
            $target = $(target);
        
        let $grandParent = $target.parent().parent();
        let departmentId = $grandParent.attr('data-id');
        //console.log(departmentId);
        
        //console.log($target)
        if(tarTag==="A"&&tarVal==="删除"){
            alert('警告，确定要删除此项吗',{
                title:'当前操作很重要',
                confirm:true,
                handled:function(msg){
                    //console.log(msg)
                    //console.log(msg)
                    if(msg==="CONFIRM"){
                        console.log(msg)
                        axios.get('/department/delete',{
                            params:{
                                departmentId
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