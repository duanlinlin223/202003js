import React from "react";
import ReactDOM from "react-dom";
// 组件开发： 框架；单页面应用；
// react如何定义组件： 1.函数声明  2.类声明
//broswer :浏览器  BOM==> broswer object model     DOM ===> document object model

//1.用函数创建一个组件
//2.组件的名字必须大写 ，为了和内置的组件区分开；（在react中认为，html天生自带的标签都是内置组件）
//3.组件每当使用一次，当前组件函数就会执行一次
//4.当使用组件时，会把行间属性组合成一个对象传递给当前组件的第一个参数
//5.如果需要传入一个对象，那么需要将对象进行...展开直接放到行间就可以

function Span(props) {
    console.log(props);
    return (
        <div>
            北京北京
            {props.a}
            {props.b}
            {props[0]}
            {props[1]}
        </div>
    );
}
let obj = {
    a: "架构课",
    b: "就业科",
};

let arr = [111, 222];
let bar = (
    <div>
        <Span a="aaa" b="bbb"></Span>
        <Span {...obj} {...arr}></Span>
    </div>
);
ReactDOM.render(bar, document.querySelector("#root"));
