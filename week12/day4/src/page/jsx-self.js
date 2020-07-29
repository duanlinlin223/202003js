// import React from "react";
// import ReactDOM from "react-dom";
// React.createElement();
// ReactDOM.render();
// obj相当于React
class Element {
    constructor(type, attr, children) {
        // this==> Element的实例
        this.type = type;
        // props不仅接收到行间属性，而且还将children放在了这个props上；
        this.props = { ...attr, children };
    }
    //这个render应该返回真实的DOM元素
    render() {
        // this ==> element的实例；ele  如果className  htmlFor
        let curEle = document.createElement(this.type);
        // 循环this.props
        // {a:100,c:235,chilren:["回龙观",obj.createElement('p',{b:1},"zfpx",)]};
        // 如果属性名不是children,那么都应该设置成这个元素的行间属性；
        for (let key in this.props) {
            if (key !== "children") {
                // 如果是className 或htmlFor 需要将其换成class 或for;
                if (key === "className") {
                    curEle.setAttribute("class", this.props[key]);
                } else if (key === "htmlFor") {
                    curEle.setAttribute("for", this.props[key]);
                } else {
                    // 原生DOM
                    curEle.setAttribute(key, this.props[key]);
                }
            } else {
                for (let i = 0; i < this.props.children.length; i++) {
                    let cur = this.props.children[i];
                    // 一种就是字符串 一种就是createElement的返回值，createElement是Element的实例；
                    let newCur =
                        cur instanceof Element
                            ? cur.render()
                            : document.createTextNode(cur);
                    // document.createTextNode : 将字符串转成文本节点的方法
                    // appendChild 传的参数必须是一个节点
                    curEle.appendChild(newCur);
                }
            }
        }
        return curEle;
    }
}
let obj = {
    // type: 标签的类型  atrr: 行间属性  children：从第三个参数开始都会放到children这个数组中
    // createElement的返回值是一个真实的DOM元素吗？
    createElement(type, attr, ...children) {
        // children 将第三个参数以后的参数都扔到一个数组children中
        // 其实react的createElement就是返回一个Element这个类的实例；
        // chilren : 是个数组
        // new的时候会默认调用Element中的constructor;
        return new Element(type, attr, children);
    },
};
// 相当于ReactDOM;
// ReactDOM.render :1.将虚拟的DOM转成真实的DOM 2.并且插入到真实的DOM中；
let objDOM = {
    render(ele, container) {
        // ele: react元素 container: 承载的容器
        // ele 是Element的一个实例,实例调用原型上的render方法，转成真实的DOM元素；
        container.appendChild(ele.render()); // 通过appendChild把ele这个元素添加到container中
    },
};
// box就是Element这个类的实例；
// let  n = <div a="100">
//     回龙观
//     <p b="1">zfpx</p>
// </div>
let box = obj.createElement(
    "div",
    { a: 100, c: 235, className: "box" },
    "回龙观",
    obj.createElement("p", { b: 1 }, "zfpx")
); // 接收一下createElement的返回值；
// let curEle=React.createElement("div",{a:100},"zfpx");
// console.log(curEle);
objDOM.render(box, document.querySelector("#root"));
