import React from "react";
import ReactDOM from "react-dom";
// 在react中function可以定义组件；
// 1.组件的名字必须大写；
// 2. 组件每使用一次，就会执行一次
// 3. 组件使用时行间属性会组装成一个对象，传给组件函数；
// class 和 普通函数声明组件有什么不同？
// 1. class有状态的，普通函数没有
// 2. class中的this指向组件实例，function没有this
// 3. class组件有生命周期，function没有
// 4. class一般用于渲染动态的结构；function一般用于封装静态的组件；
function Bar(props) {
    // return 出react元素；
    // this--> undefined
    return <div>{props.a}</div>;
}

let a = (
    <div>
        <Bar a="19"></Bar>
    </div>
);

// class 定义组件
// 属性和状态
class Foo extends React.Component {
    constructor() {
        super();
        // 组件实例新增了state；这个就是状态
        this.state = { num: 100 };
    }
    // 元素的事件方法都放在原型上
    add = () => {
        // this==> 组件实例
        // 更新状态，同时会再次调用render函数，重新渲染；视图更新
        // react会进行合并，后面会把前面 的覆盖掉；
        this.setState({ num: this.state.num + 1 });
        this.setState({ num: this.state.num + 2 });
        // setState是异步的；
        // 用函数的新发可以防止状态的合并
        this.setState((prevState) => {
            return { num: prevState.num + 1 };
        });
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
