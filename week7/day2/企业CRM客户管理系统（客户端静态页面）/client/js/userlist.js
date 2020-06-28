$(function(){
    let str,
        $tbody = $(".tableBox tbody"); 
    axios.get('/user/list').then(result=>{
        let res = result.data
        for(let i = 0;i<res.length;i++){
             //console.log(res)
            // console.log(res[i].sex)
            str += `
                <tr>
                    <td class="w3"><input type="checkbox"/></td>
                    <td class="w10">${res[i].name}</td>
                    <td class="w5">${
                        (function(){
                        if(parseFloat(res[i].sex)===  0 ){
                            return `男`
                        }else if(parseFloat(res[i].sex)===1){
                            return `女`
                        }
                    })()
                    }</td>
                    <td class="w10">${res[i].department}</td>
                    <td class="w10">${res[i].job}</td>
                    <td class="w15">${res[i].email}</td>
                    <td class="w15">${res[i].phone}</td>
                    <td class="w20">${res[i].desc}</td>
                    <td class="w12">
                        <a href="javascript:;">编辑</a>
                        <a href="javascript:;">删除</a>
                        <a href="javascript:;">重置密码</a>
                    </td>
                </tr>
            `
            $tbody.html(str );
        }
        
    })
    
})

$(function(){
    //删除用户
    let $td = $(".tableBox td")
    $(".tableBox").on("click"," a:eq(1)",function(){
        alert(0)
        axios.get('/user/delete',{
            userId:1
        }).then(result=>{
			console.log(result)
		})
    })
    
	
})