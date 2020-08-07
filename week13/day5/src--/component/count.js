import React from "react";
import ReactDOM from "react-dom";
import store from "../store/index.js";
import actions from "../store/actions/count.js";
// 当更改store中的数据时：
// 1. 先定义一个常量
// 2. 利用dispatch派发一个action
// 3. 编写reducer

class Count extends React.Component {
    constructor() {
        super();
        // 将store中的数据和该组件的state绑定在一起
        this.state = { num: store.getState().num };
    }
    // 需要更新视图，所以只要state发生改变或属性发生改变；setState;利用订阅的方法，让state改变一次，视图就会更新一次
    componentDidMount() {
        // 挂载完成之后，才订阅
        // dispatch一次，就想更新一次页面，setState一次，视图会更新一次；
        store.subscribe(() => {
            this.setState({ num: store.getState().num });
        });
    }
    add = () => {
        // 仅仅是dispatch,那么最多也就是将store中state数据更新一次，但是如果还想视图更新，必须和setState进行关联，从而让视图更新；
        store.dispatch(actions.add());
    };
    min = () => {
        store.dispatch(actions.min());
    };
    render() {
        return (
            <div>
                <button onClick={this.add}>+</button>
                <span>{this.state.num}</span>
                <button onClick={this.min}>-</button>
            </div>
        );
    }
}

//store的数据是公共的；createStore只会执行一次；一个项目只有一个store
ReactDOM.render(<Count></Count>, document.querySelector("#root"));
