import React, { Component } from "react";
import store from "../store/index.js";
import actions from "../store/actions/counter.js";
import { connect } from "react-redux";

class Counter extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = { num: store.getState().counter.num };
    // }
    // componentDidMount() {
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
        return (
            <div>
                <button onClick={this.add}>++</button>
                <span>{this.props.num}</span>
                <button>--</button>
            </div>
        );
    }
}

export default connect((state) => ({ ...state.counter }), actions)(Counter);
