import React from "react";
// import store from "../store/index";
import actions from "../store/actions/counter.js";
import { connect } from "react-redux";
import store from "../store/index.js";

class Counter extends React.Component {
    // constructor() {
    //     super();
    //     this.state = { num: store.getState().counter.num };
    // }
    // componentDidMount() {
    //     //订阅一下：每当执行一次dispatch一次，那么就执行一次setState一次，让视图更新
    //     store.subscribe(() => {
    //         this.setState({ num: store.getState().counter.num });
    //     });
    // }
    add = () => {
        // store.dispatch(actions.add());
        this.props.add();
    };

    render() {
        console.log(this.props);
        //react-redux：把store中的数据以属性的方式传递给了该组件
        return (
            <div>
                <button onClick={this.add}>+</button>
                <span>{this.props.num}</span>
                <button>-</button>
            </div>
        );
    }
}
//第二个括号把当前组件传递过去
//connect：第一个参数是把store中的该组件的state放到该组件的属性上，
//第二个参数是把actions中的方法包装之后再次放到组价的属性上；

//把todo用redux react-redux重构一下
let mapStateToProps = (state) => ({ ...state.counter });
export default connect(mapStateToProps, actions)(Counter);
