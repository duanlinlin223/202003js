// 先分析效果； 你要干什么？写这行代码的目的是什么？
// 1. 获取json中的数据
let val;
$.ajax({
    url:"json/regionData.json",
    type:"get",
    async:false,
    success:function(data){
        // console.log(data);
        // 把请求回来的数据给了formData的形参，把formData的返回值给了bindHtml;
        $("#province").html(bindHtml(formData(0,data)));
        $("#province").change(function(){
            val = $(this).val();// 获取provice的值；
            // 为了格式化数据，区分每次解决不同的option
            let arr= formData(1,data);// 1==> 这个省份下的市
            console.log(bindHtml(arr))
            $("#city").html(bindHtml(arr))
        })
    }
});
function formData(level,data){
    let result = [];
    let ary =null;
    if(level===0){// 如果是传0，解决省份
        $.each(data,function(index,item){// index:索引 item：那一项
            result.push(item.name)
        })
    }
    if(level===1){
        // 根据省份找出对应的市；
        $.each(data,function(index,item){
            if(item.name===val){
                ary = item.city;/// 找到对应的省份，然后把省份对应的对象中的city对应的属性值找到，赋值给ary;
            }
        });
        // console.log(ary);
        $.each(ary,function(index,item){
            result.push(item.name)
        })
    }
    return result;// result得到所有的省份/地区市
}
function bindHtml(arr){
    let str=`<option>请选择</option>`;
    $.each(arr,function(index,item){// 
        str+=`<option>${item}</option>`
    });
    return str;
}