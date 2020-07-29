import React from "react";
import ReactDOM from "react-dom";
import { func } from "prop-types";

let a = (
    <div id="a">
        <div>1</div>
        <div>2</div>
    </div>
);
let bar = (
    <div>
        <ul>
            <li>100</li>
        </ul>
    </div>
);
// 1.react 元素，在JS中写的元素标签；a就是react 元素；
// 2.react 元素只能有一个根元素;
// 3.React.render 只能有一个，将虚拟的DOM元素通过render转成真实的DOM并且挂载到root元素上，如果有多个，后面的会把前面的覆盖掉；
// 4.ReactDOM.render会把根元素中所有内容替换；
// 5.ReactDOM是一个对象，里面包含了render方法，render方法是将react元素{}先转成真实的DOM元素，并且将这个真实的DOM元素插入到页面的根元素中；
// 6.页面中的元素需要等到ReactDOM.render之后才能获取真正的元素；render是同步渲染DOM；当真正的元素插入到页面中以后，下面的代码才会执行；
// 7.render的第三个参数是一个函数,当真实的DOM挂载到页面中以后，会立即执行这个回调函数；

// 参数1： jsx元素===react元素
// 参数2： 要挂载的真实的DOM元素；
// 参数3 : callback
// ReactDOM.render(参数1,参数2,参数3);

ReactDOM.render(a, document.querySelector("#root"), function () {
    var box = document.getElementById("a");
    console.log(box);
});
var box = document.getElementById("a");
console.log(box);
// ReactDOM.render(bar,document.querySelector("#root"));
// console.log(ReactDOM);
