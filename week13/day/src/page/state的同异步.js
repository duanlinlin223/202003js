import React from "react";
import ReactDOM from "react-dom";
//当组件的属性或者状态发生改变，都可以引发视图的更新
class Foo extends React.Component {
    constructor() {
        super();
        this.state = { num: 100 };
    }
    // 元素的事件方法都放在原型上
    add = () => {
        // setState是异步的；还没等到+1这个操作完成，紧接着就来+2;由于setState是异步，所以react进行了判断后进行了合并；
        // 1. 在定时器的延时的回调函数中，setState是同步更新数据的
        // 2. 在react的事件绑定中或react的生命周期钩子函数中，调用setState更改数据，那么setState就异步的；
        setTimeout(() => {
            this.setState({ num: this.state.num + 1 });
            this.setState({ num: this.state.num + 2 });
        }, 2000);
    };
    render() {
        // 组件每使用一次，都会执行一次render
        // render 的返回值
        // this.props.a// 把行间属性放在了当前实例的props属性上
        // 在react中，只要属性或者状态发生改变，就会触发视图更新；
        // setState()
        return (
            <div>
                {this.props.a}
                <p>{this.state.num}</p>
                <button onClick={this.add}>按钮</button>
            </div>
        );
    }
}

ReactDOM.render(<Foo a="zfpx"></Foo>, document.querySelector("#root"));
