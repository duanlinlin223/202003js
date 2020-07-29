import React from "react";
import ReactDOM from "react-dom";
// class定义组件需要继承React.Component这个类；
// 在项目中一般使用class定义组件；
// function和class定义组件有什么区别呢？
// 类声明的组件有状态，有this，还有生命周期；
// 在react中，属性和状态的变化都会引发视图的更新；

// function Fn(){}这种函数声明组件的方法没有this  没有生命周期
class Foo extends React.Component {
    // constructor是早于render执行的；其实constructor和render都是react组件的一个生命周期钩子函数；先执行了constructor,再执行render函数；
    // constructor 里面不能直接通过实例.props去获取传递过来的属性
    // 如果需要在construtor中获取行间属性传递的数据，可以在construtor中传递一个参数来接收；
    constructor(props) {
        console.log(props); //
        super();
    }
    // 渲染  render函数return什么，最后这个组件就代表了什么结构；
    render() {
        // class组件的render在Foo的原型上，这个函数的返回值最后会是该组件的结构；
        // 当组件每使用一次，render函数都会执行一次；
        // 函数中的this执行组件的实例；实例有个props属性，存储了组件行间传递过来的属性；
        // console.log(100)
        // 类组件通过行间属性，可以把数据以对象的方法放在实例的props属性，然后通过this获取到这个props属性，就可以获取到行间传递过来的属性了；
        // console.log(this);// 组件实例； function定义组件this=>undefined
        //把行间传递过来的属性放在组件的实例props上；
        //放在行间的属性对这个组件来说就是组件属性
        return <div>{this.props.a}</div>;
    }
}
let bar = (
    <div>
        {/* render 函数返回什么，就把这个Foo组件替换成什么结构 */}
        {/* 当使用组件时，默认会new Foo ；而且会默认调用一次原型上的render方法 */}
        <Foo a="100" b="200"></Foo>
        <Foo></Foo>
    </div>
);
ReactDOM.render(bar, document.querySelector("#root"));
