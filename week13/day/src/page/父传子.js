import React from "react";
import ReactDOM from "react-dom";
import { func } from "prop-types";

class Parent extends React.Component {
    constructor() {
        super();
        // 相当于vue的data的数据；自己私有的
        this.state = { time: "十点半" };
    }
    change = () => {
        // 普通函数就是this指向undefined
        // 箭头函数指向Parent的实例；
        // 箭头函数中没有this,会往上一级作用域找，上一级作用域正好是new Parent执行形成的作用域，new Parent形成的作用域里面的this指向实例，所以该箭头函数中的this也正好是parent实例；
        // 上一级作用域是谁？
        // console.log(this);// Parent的实例；
        // this ==> 函数的执行主体 谁让这个函数执行
        this.setState({ time: "十二点半" });
    };
    render() {
        // render是react实例生命周期的一个钩子函数
        // render中return的结构最终会把parent标签里面的内容全部替换掉；
        // 父组件通过行间的属性的方式传给了子组件
        // render是一个函数 也是一个作用域；render上一级作用域是谁；是new Parent;形成的作用域
        // this==> Parent的实例；
        return (
            <div>
                {this.state.time}
                <button onClick={this.change}>aabbcc</button>
                <Child t={this.state.time}></Child>
            </div>
        );
    }
}
// 1.生命周期的钩子函数this都指向实例
// 2.给元素绑定的事件如果是箭头函数那么this就指向实例；如果是普通函数就是this就是undefined；
// 状态变化视图也变化；
// 对于child组件来说，t是属性，属性发生改变，视图也会更新

// add();//
// // btn =document....;
// btn.onclick = ()=>{
//     aaaxxx();
// }
// 1. 父传递给子组件
// 2. 当父组件state更新，父组件视图更新，子组件用了父组件的这个数据，那子组件更新吗？
class Child extends React.Component {
    constructor() {
        super();
    }
    render() {
        console.log(this.props);
        return (
            <div>
                <p>这是子组件:{this.props.t}</p>
            </div>
        );
    }
}
ReactDOM.render(<Parent></Parent>, document.querySelector("#root"));
