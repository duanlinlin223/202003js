import React from "react";
import ReactDOM from "react-dom";

//在解析jsx语法时，必须使用React.createELement
let bar = (
    <div>
        2020高考新增口语
        <p>我爱你中国</p>
        <i>河南</i>
    </div>
);
//console.log(bar); //是一个react元素，也是一个虚拟的DOM元素；其实就是在当前内存中的一个对象；DOM-diff对比，更改发生改变的那块真实的DOM
//实际上在解析react元素时，会调用React.createElement方法；
// console.log(React);
//React.createElement(参数1，参数2，参数3)：也会创建一个虚拟的DOM元素；
//参数1 元素的类型  参数2：是个对象，行间属性 参数3：从第三个参数以后都将成为该div元素的子节点；

// let ele = React.createElement(
//     "div",
//     { a: "北京" },
//     "2020高考新增口语",
//     React.createElement("p", null, "我爱你中国"),
//     React.createElement("i", null, "河南")
// );
// console.log(ele);

//REACT:MVC模式 m:model v:view c controller
//JSX语法其实是React.createElement 的语法糖
ReactDOM.render(bar, document.querySelector("#root"));
