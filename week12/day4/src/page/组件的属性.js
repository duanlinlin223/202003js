import React from "react"; //React 会接受一个对象
// import React,{Component} from "react"; 也可以  ；下面直接就用Component
import ReactDOM from "react-dom";

class Bar extends React.Component {
    constructor(props) {
        //如果有constructor 里面必须调用super；constructor这个函数不是必须的;
        super();
        console.log(props.a);
        //console.log(this.props.a); //constructor 的执行时间早于render;此时实例没有props属性
    }
    render() {
        //
        //console.log(attrs);==>undefined;render的参数是没办法接收到行间传递过来的属性值的
        //render函数必须有，里面return也必须有
        console.log(this); //render 函数中的this指向组件实例
        //render是个函数，里面是一个作用域；也可以写任意代码
        //返回一个react元素；react元素是React组件的基本组成单位
        return <div>{this.props.a}</div>;
    }
}
//在vue中data中的数据发生改变，视图更新，在React中只有属性或者状态发生改变，那么这个视图就会更新；
//行间属性变化 视图就会更新
let num = 1;
let b = 2;
setInterval(() => {
    num += 1;
    //num每隔一秒都会加一；并且传过去的属性在更新
    //ReactDOM.render(<Bar a={num}></Bar>, document.querySelector("#root"));
}, 1000);
//传递过去的数据永远是1；ReactDOM.render只执行一次
// ReactDOM.render(<Bar a={num}></Bar>, document.querySelector("#root"));
