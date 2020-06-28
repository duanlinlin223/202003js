$(function(){
    let $inpBox = $(".inpBox"),
        $inp = $inpBox.find("input"),
        $textarea = $inpBox.find("textarea"),
        $submit = $(".submit");
    let departmentId = window.location.href.queryURLParams().id;
    //console.log(Id);
    
    //let render = function(){
        
    //}
    let updateDepart = function(){
        axios.get('/department/info',{
            params:{
                departmentId
            }
        }).then(result=>{
            if(parseFloat(result.code)===0){
                let {name,desc}=result.data;
                $inp.val(name);
                $textarea.val(desc)
                //window.location.href="departmentlist.html"
            }
        })
    }

    if(departmentId){
        updateDepart();
        $submit.click(function(){
            let name = $inp.val();
            let desc =$textarea.val();
            if($inp.val()===''|| $textarea.val()===""){
                alert('信息不能为空,请输入！')
            }
            axios.post('/department/update',{
                departmentId:departmentId,
                name,
                desc
            }).then(result=>{
                if(parseFloat(result.code)===0){
                   alert("修改成功")
                }
            })
        })
    }else{
        $submit.click(function(){
            if($inp.val()===''|| $textarea.val()===""){
                alert('信息不能为空,请输入！')
            }
            //console.log($inp.val())
            axios.post('/department/add',{
                name:$inp.val(),
                desc:$textarea.val()
            }).then(result=>{
                //console.log(result)
                if(parseFloat(result.code)===0){
                    window.location.href="departmentlist.html"
                }
            })
        })
    }
    
    
    
})