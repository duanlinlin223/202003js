import React from "react";
import store from "../store/index";
import { connect } from "react-redux";
//能够引发视图更新的  state props属性
//react-redux 就是把store中公共的数据作为属性传给组件
class Compute extends React.Component {
    // constructor() {
    //     super();
    //     this.state = { num: store.getState().counter.num };
    // }
    // componentDidMount() {
    //     store.subscribe(() => {
    //         this.setState({ num: store.getState().counter.num });
    //     });
    // }
    //由于num是公共数据，当其中一个组件对其进行修改，所有依赖这个公共数据的组件就应该高效的更新；所以需要在订阅一下
    render() {
        return <div>{this.props.num % 2 === 0 ? "偶数" : "奇数"}</div>;
    }
}

let mapStateToProps = (state) => ({ ...state.counter });
export default connect(mapStateToProps)(Compute);
