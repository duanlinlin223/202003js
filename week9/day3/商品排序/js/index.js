var list=document.getElementById("list");
var navs=document.getElementsByTagName("a")
var olis=document.getElementsByTagName("li")
var data;
var xhr=new XMLHttpRequest();
xhr.open("get","json/product.json",false);
xhr.onreadystatechange=function(){
    if(xhr.readyState===4&&/^2\d{2}/.test(xhr.status)){
         data=utils.toJSON(xhr.responseText);
         console.log(data)
    }
}
xhr.send();

function shuzu(){
    var str=``;
    console.log(data)
    for(var i=0;i<data.length;i++){
        var cur =data[i]
        
        str+=`<li data-time="${cur.time}" data-hot="${cur.hot}" data-price="${cur.price}">
            <img src="${cur.img}" alt="">
                <span>${cur.title}</span>
                <span>${cur.time}</span>
                <span>${cur.hot}</span>
                <span>${cur.price}</span>
        </li>`
    }
    list.innerHTML=str;
}
shuzu();


// // 1.先获取元素
// var list = document.getElementById("list");
// var navs = document.getElementsByTagName("a");
// var oLis = document.getElementsByTagName("li");
// var data;
// // 2. 通过ajax获取请求数据
// // 1) 创建ajax实例
// var  xhr = new XMLHttpRequest();
// // 2) 打开一个路径
// xhr.open("get","json/product.json",false);
// // 3) 监听数据状态
// xhr.onreadystatechange = function(){
//     if(xhr.readyState===4&&/^2\d{2}/.test(xhr.status)){
//         data = utils.toJSON(xhr.responseText);
//     }
// }
// // 4) 发送请求
// xhr.send();
// // 3. 循环data,进行数据绑定
// // [{},{},{}]
// function bindHtml(){
//     var str = ``;
//      console.log(data);
//     // 循环结束只是得到了一个用li连接起来的字符串；最后把str放到list元素中；
//     for(var i=0;i<data.length;i++){
//         var cur = data[i];
//         // 行间属性；把子元素的数据都放到了当前li上；
//         str+=`<li data-time="${cur.time}" data-hot="${cur.hot}" data-price="${cur.price}">
//             <img src="${cur.img}" alt="">
//             <span>${cur.title}</span>
//             <span>${cur.time}</span>
//             <span>${cur.hot}</span>
//             <span>${cur.price}</span>
//         </li>`
//     }
//     list.innerHTML = str;// 放到页面上
// }
// bindHtml();


// 4.给每一个a标签绑定点击事件
for(var i=0;i<navs.length;i++){
    navs[i].index=i;// 给每一个a标签增加一个属性index,代表是第几个a;
    navs[i].flag=-1;// 点击一次1  点击第二次-1
    navs[i].onclick = function(){
        // this==> 当前的a元素
        sortList.call(this);
        this.flag*=-1;
    }
}
// ary是所有li转成的数组
var ary = utils.toArray(oLis);// 把所有的li转成数组；
function sortList(){
    // console.log(this);// 点击的a元素
    var dataAry = ["data-time","data-hot","data-price"];
    var that = this;
    ary.sort(function(a,b){// a,b
        // a,b : 每一个li ;li元素都是对象
        // getAttribute : 获取当前行间的属性对应的属性值；相当于把子元素span的数据都放到了自己li元素上一份；
        // 回调函数中的this永远指向window
        // console.log(dataAry[that.index]);
        var  cur = a.getAttribute(dataAry[that.index]);// "2014-2-1"
        var  next = b.getAttribute(dataAry[that.index]);
        if(that.index===0){
            // 如果是上架时间，需要把中杠去掉，再运算
            cur=cur.replace("-","").replace("-","");
            next = next.replace("-","").replace("-","");
        }
        // 控制奇数点击和偶数点击；
        return (cur-next)*that.flag;
    });
    // 排序完以后，ary的存储的li顺序发生了变化，但是页面是不会变化，需要重新循环将其放回list中；
    var frg = document.createDocumentFragment();
    for(var i=0;i<ary.length;i++){
        frg.appendChild(ary[i]);
    }
    list.appendChild(frg);
}