import React from "react";
import ReactDOM from "react-dom";
// 1. defaultValue : 只是第一次从state中取值，那么后期该input的value值跟state的状态；后期更新状态这个input框的value也不会更新
class Sum extends React.Component {
    constructor() {
        super();
        this.state = { result: 0 };
    }
    add = () => {
        // 不管改了哪个input的value,都会触发该方法；
        // 需要获取到每个input的value值；
        // 在react中可以给行间加上ref属性，从而获取到该元素
        // 当react解析元素时，会把所有行间属性带有ref的元素，都放到实例的refs属性这个对象中
        // ref 不仅可以支持字符串，还可以支持函数的写法
        // ref是个函数，那么这个函数的第一个参数就是该元素；
        // console.log(this.refs.first)
        let result = Number(this.refs.first.value) + Number(this.b.value);
        this.setState({ result });
    };
    render() {
        // input的value跟state中的状态无关；那么这类就是非受控的组件
        return (
            <div>
                <input type="text" onChange={this.add} ref="first"></input>+
                <input
                    type="text"
                    onChange={this.add}
                    ref={(x) => {
                        this.b = x;
                    }}
                ></input>
                ={this.state.result}
            </div>
        );
    }
}
ReactDOM.render(<Sum></Sum>, document.querySelector("#root"));
