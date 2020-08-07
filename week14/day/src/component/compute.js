import React, { Component } from "react";
import store from "../store/index.js";
import { connect } from "react-redux";
class Compute extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = { num: store.getState().counter.num };
    // }
    // componentDidMount() {
    //     store.subscribe(() => {
    //         this.setState({ num: store.getState().counter.num });
    //     });
    // }
    render() {
        return (
            <div>
                {/* {this.state.num % 2 == 0 ? "偶数" : "奇数"} */}
                {this.props.num % 2 == 0 ? "偶数" : "奇数"}
            </div>
        );
    }
}

export default connect((state) => ({ ...state.counter }))(Compute);
