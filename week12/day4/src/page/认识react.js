import React from "react"; //引入react的核心库，每一个模块必须都要引入
//如果当前js中存在react元素，那么必须要引入
import ReactDOM from "react-dom";
//当使用jsx语法时，React必须在该作用域下；一个模块一个scope；一个js文件都有自己独立的scope
//什么是jsx语法：允许在js中写标签

//参数1：是jsx元素   参数2：是通过id为root获取的public文件中index.html中的元素；最终将jsx元素插入到root根元素中
//浏览器只认识html css  js 文件；但是也明确规定不能在js中写标签
//在后缀名是.js的文件中，是不支持直接写标签的。
//能够在文件中直接写标签，且不抱错的是jsx文件；
//因为webpack对js和jsx文件进行了处理，所以不管写在什么文件中都能解析并且支持
//在react的js文件中或者是jsx文件中创建的元素都叫jsx元素或者react元素
//ReactDOM.render(<div> 今天是周五 </div>, document.querySelector("#root"));
// 或者
let a = <div>今天是周五</div>;

let b = <i>我是i标签</i>;
console.log(b); //虚拟的dom元素；在js中就是一个普通的对象；
console.log(a); //这是jsx元素也叫react元素，那么实际上a就是一个虚拟的DOM元素；也是一个对象；

//JSX语法：是一个语法糖
ReactDOM.render(a, document.querySelector("#root"));

//ReactDOM.render
/*
ReactDOM.render:
1.可以将react元素(jsx元素)的虚拟DOM转成真实的DOM元素
2.把真实的DOM挂载到根元素root元素中
*/
