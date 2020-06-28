$(function(){
    let $inpBox = $(".inpBox"),
        $inp = $inpBox.find('input'),
        $textarea = $inpBox.find('textarea'),
        $submit = $(".submit"),
        $checkBox = $inpBox.find("input[type='checkbox']");
    let id = window.location.href.queryURLParams().id;
    
    let selected="";

    //点击编辑过来给页面渲染默认信息
    let updateFn = function(){
        axios.get('/job/info',{
            params:{jobId :id}
        }).then(result=>{
            if(parseFloat(result.code)===0){
                let {name,desc,power} = result.data;
                power = power.split('|')
                $inp.val(name)
                $textarea.val(desc)
                $(power).each(function(i,item){
                    if(item){
                        $("#" + item).prop('checked',true)
                    }
                    
                })
            }
        })
    }
    
    if(id){
        updateFn();
        //如果是点击编辑过来的，修改职务信息
        $submit.click(function(){
            let name = $inp.val();
            let desc =$textarea.val();
            if($inp.val()===''|| $textarea.val()){
                alert("请填写信息")
            }
            for(let i =0;i<$checkBox.length;i++){
                if($checkBox[i].checked){
                    selected+=$checkBox[i].id+'|';
                }
            };
            selected = selected.slice(0,selected.length-1);

            axios.post('/job/update',{
                jobId:id,
                name,
                desc,
                power:selected
            }).then(result=>{
                if (parseFloat(result.code)===0) {
                    alert('修改成功')
                }
            })
        })
    }
    else{
        //点击新增职务添加职务信息
        $submit.click(function(){
            if($inp.val()===''|| $textarea.val()){
                alert("请填写信息")
            }
            for(let i =0;i<$checkBox.length;i++){
                if($checkBox[i].checked){
                    selected+=$checkBox[i].value+'|';
                    
                }
            }
            selected = selected.slice(0,selected.length-1);
            axios.post('/job/add',{
                name:$inp.val(),
                desc:$textarea.val(),
                power:selected
            }).then(result=>{
                if(parseFloat(result.code)===0){
                    window.location.href="joblist.html"
                }
            })
            
        })
    }
})