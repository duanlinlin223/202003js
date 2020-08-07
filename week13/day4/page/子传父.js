import React from "react";
import ReactDOM from "react-dom";

class Parent extends React.Component {
    constructor() {
        super();
        this.state = { time: "十点半", color: "红色" };
    }
    changeBg = () => {
        //只会更改掉属性名相同的那一项，而不是直接覆盖原来的空间地址
        this.setState({ color: "黑色" });
    };
    render() {
        console.log("parent 更新");
        return (
            <div>
                {this.state.color}
                <Child chan={this.changeBg}></Child>
            </div>
        );
    }
}
// 当一个组件的状态或者是属性发生改变，都可以引发视图的更新；

//子传父：儿子不可以直接更改父组件的数据，但是父组件的方法可以通过属性传给子组件，然后在子组件上通过props取到父组件的方法，并且点击让其执行，从而达到了更改父组件的数据；
class Child extends React.Component {
    constructor() {
        super();
    }
    render() {
        console.log("child 更新");
        return (
            <div>
                <button onClick={this.props.chan}>改变颜色</button>
                <p>这是子组件:</p>
            </div>
        );
    }
}
ReactDOM.render(<Parent></Parent>, document.querySelector("#root"));
