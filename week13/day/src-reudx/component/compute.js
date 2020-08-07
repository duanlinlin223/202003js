import React from "react";
// import store from "../store/index";
import { connect } from "react-redux";
// 能够引发视图的更新： state    props 属性；
// react-redux 就是把store中公共的数据作为属性传给组件
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
    // 由于num是公共数据，当其中一个组件对其进行修改，所有依赖这个公共数据的组件就应该高效更新；
    render() {
        // 渲染根据counter组件的state的num是奇数还是偶数，来显示
        return <div>{this.props.num % 2 === 0 ? "偶数" : "奇数"}</div>;
    }
}

export default connect((state) => ({ ...state.counter }))(Compute);
