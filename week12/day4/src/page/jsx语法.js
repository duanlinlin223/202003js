import React from "react";
import ReactDOM from "react-dom";

import "./3.index.less"; //引入css样式；
let obj = {
    name: "北京",
};
let sex = "男";
function fn() {
    return <a href="www.baidu.com">百度一下</a>;
}
let ary = [<li key="1">河北</li>, <li key="2">河南</li>, <li key="3">山西</li>];
//JSX语法：
//1.通过{}去取值，取的是当前作用域下的值
//2.{}中支持三元运算符
//3.对象不能直接作为react的子元素，不能放在{}中
//4.函数也不能作为react的子元素，但是可以在大括号中让函数执行；页面最终会渲染函数的执行结果；函数内部也可以写react元素
//5.大括号中是可以直接方数组的；会把数组的每一项渲染到页面中；如果数组中每一项都是一个react元素，那么最终会把这些react元素一起放到大括号中渲染；在react中，经常是把后端返回的数据映射成一个都是react元素的数组，最终放到页面中；
//6.{}中支持表达式
//7.{}中null、undefined、true、false、[]空数组，不会显示
//8.行间属性不能直接使用class关键字；在react中class有特殊意义，需要写样式用className代替；在react元素中label标签使用属性，把for替换成htmlFor（需驼峰写法）
//9.react元素中，行间属性style的属性值需要用{{}}包起来，如果样式中出现'-'，需要将其转成驼峰的方式 eg:margin-right-->marginRight
let ele = (
    <div>
        <p>{obj.name}</p>
        <p>{sex}</p>
        <p>3大于1吗？{3 > 1 ? "3大于1" : "3小于1"}</p>
        {/* <p>{obj}</p> */}
        <p>{fn()}</p>
        <p>{[1, 2, 3, 4, 5]}</p>
        <p>{ary}</p>
        <p>{100 + 100}</p>
        <p>{null}</p>
        <p>{undefined}</p>
        <p>{false}</p>
        <p>{true}</p>
        <p className="num" style={{ color: "red", fontWeight: "bold" }}>
            {0}
            样式需要用驼峰
        </p>
        {/* <p>{NaN}</p> */}
        <label htmlFor="name"></label>
        <div className="box">
            下午打起精神<p>认真听课</p>
        </div>
    </div>
);
// console.log(ary);
// ary.push(<li key="4">江苏</li>);在render之前更改数据可以改变视图，在render之后更改数据，数据不会发生变化
ReactDOM.render(ele, document.querySelector("#root"));
