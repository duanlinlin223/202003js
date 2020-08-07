import React, { Component } from "react";

import store from "../store/index.js";
import actions from "../store/actions/count.js";
class Count extends Component {
    constructor(props) {
        super(props);
        this.state = { num: store.getState().count.num };
    }
    componentDidMount() {
        store.subscribe(() => {
            this.setState({ num: store.getState().count.num });
        });
    }
    add = (n) => {
        //只要派发dispatch，就要修改3个文件，分别是 action-types  actions  reducers
        store.dispatch(actions.add(n));
    };
    min(m) {
        store.dispatch(actions.min(m));
    }
    render() {
        return (
            <div>
                <button
                    onClick={() => {
                        this.add(2);
                    }}
                >
                    +
                </button>
                <span>{this.state.num}</span>
                <button
                    onClick={() => {
                        this.min(1);
                    }}
                >
                    -
                </button>
            </div>
        );
    }
}

export default Count;
