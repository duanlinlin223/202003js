// import React from "react";// 导入react核心库；每个模块中必须导入；
// 如果当前js中存在react元素，那么需要导入React;在js中写标签；
import React from "react";
import ReactDOM from "react-dom";
let a = <div>123</div>; // JSX的写法 reatc元素也叫jsx元素，最终目的是插入到页面中；
// 在解析jsx元素时，会默认调用react中的一些方法；
// a是一个虚拟的元素对象；在js中就是一个普通的对象；type :类型；
// JSX语法 ： 是一个语法糖；
// ReactDOM.render: 将react元素编译成真实的DOM，最后插入到root元素中；
ReactDOM.render(a, document.querySelector("#root"));
console.log(a);
