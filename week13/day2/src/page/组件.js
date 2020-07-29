import React, { Component } from "react";
import ReactDOM from "react-dom";
class Bar extends Component {
    //constructor里面不能直接通过实例的props去获取传递过来的属性，this.props不能获取
    //如果需要在constructor中获取行间属性传递的数据，可以在constructor中传递一个参数来接收
    constructor(props) {
        super();
        this.state = {};
        console.log(props); //可以通过传入参数props来接收行间属性传递过来的数据；不能直接用this.props来获取，因为constructor执行的时候数据还没有传递过来
    }
    render() {
        //class定义组件的render在Bar的原型上，这个函数的返回值最后会是改组件的解构
        //当组件每使用一次，render函数都会执行一次
        //this指向组件实例，实例上有个props属性，存储了组件行间传递过来的属性
        // console.log(this);//组件实例
        //console.log(100); //每执行一次，render函数都会执行一次
        //类组件通过行间属性，可以把数据以对象的方法放在实例的props属性上，通过this获取到这个props属性，就可以获取到行间传递过来的属性了
        return (
            <div>
                {this.props.a}
                {this.props.b}
            </div>
        );
    }
}
let bar = (
    <div>
        <Bar a="100" b="200"></Bar>
        <Bar></Bar>
    </div>
);
ReactDOM.render(bar, document.querySelector("#root"));
