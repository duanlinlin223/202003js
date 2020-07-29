import React from "react";
import ReactDOM from "react-dom";

// JSX语法： 允许在js中直接写标签；
let str = <div></div>;
// JSX语法创建的这个标签就是一个react元素，也叫jsx元素；只有一个根元素；当代码真正解析到这一行时，实际上默认调用了React.createElement;这个方法会创建出一个虚拟的DOM对象

// 虚拟的DOM： 就是一个在内存中的对象
//
// ReactDOM.render : 1.将虚拟的DOM转成真实的DOM对象  2. 把真实的DOM插入到root元素中；
// 1. JSX 语法：

// 1) {}取值
// 2) 支持三元运算和表达式
// 3) 不能直接放对象和函数；但是函数的执行结果
// 4) class=> className  for==> htmlFor
// 5) undefined  null  true  false 在页面中不显示
// 6) 行间属性style={{}}
// 7) 直接放入数组,数组成员可以是react元素，最后会把所有的元素渲染出来；数据绑定；map映射出一个数组直接放在{};

// jsx就是CreateElement的语法糖
let s = <div></div>;
React.createElement("div", { a: 100 }, "abc", React.createElement());
class Element {
    constructor(type, attr, children) {}
    render() {}
}
let obj = {
    // 将第三个参数以后的参数都放到一个数组中；
    createElement(type, attr, ...children) {
        // 返回一个虚拟的DOM对象
        return new Element(type, attr, children);
    },
};
let objDOM = {
    render(ele, container) {
        // appendChild : 第一个实参必须是一个Node的节点类型
        // Node 节点 ：元素节点 ele不是一个元素节点ele是一个虚拟的DOM对象
        // ele是createElement的返回值；也就是一个Element的实例；那么就可以调用原型的render方法；
        container.appendChild(ele.render());
    },
};

let ary = [<a>1</a>, <a>2</a>];
ReactDOM.render(<div>{ary}</div>, document.querySelector("#root"));
