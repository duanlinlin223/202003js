import React, { Component } from "react";
import ReactDOM from "react-dom";

// 受控组件：表单类的元素受状态的控制，这类组件就是受控组件
class Panel extends Component {
    constructor(props) {
        super(props); //如果该组件需要状态，那么就需要写constructor
        this.state = { num: 100, a: 200 };
    }
    change = (e, key) => {
        // console.log(key);
        //num从input框的value值来获取
        this.setState({ [key]: e.target.value });
    };
    render() {
        console.log("render");
        return (
            <div>
                <p>{this.state.num}</p>
                <p>{this.state.a}</p>
                {/* 希望将状态值放到input框中 */}
                {/* 表单元素，如果只有value属性，那么这将是只读的input框 */}
                {/* 在react中如果使用表单元素，记得给表单元素加上onChange事件
                 */}
                {/* onChange事件每当改变value值时，就会执行;把input框中的value值赋值给state中的num */}
                {/* 表单类的元素受状态的控制，这类组件就是受控组件 */}
                <input
                    type="text"
                    value={this.state.num}
                    onChange={(e) => {
                        this.change(e, "num");
                    }}
                />
                <input
                    type="text"
                    value={this.state.a}
                    onChange={(e) => {
                        this.change(e, "a");
                    }}
                />

                {/* 非受控组件 defaultValue */}
                <input type="text" defaultValue={this.state.num} />
                {/* <input
                    type="text"
                    value={this.state.num}
                    onChange={this.change.bind(null)}
                /> */}
                {/* <input
                    type="text"
                    value={99}
                    onChange={(e) => {
                        e.target.value = 888;
                    }}
                /> 修改不了*/}
            </div>
        );
    }
}
ReactDOM.render(<Panel></Panel>, document.querySelector("#root"));
