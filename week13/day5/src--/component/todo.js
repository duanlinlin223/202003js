import React, { Component } from "react";
import store from "../store/index1.js";
//store的数据是公共的，任何组件都可以获取到里面的数据
export default class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                {store.getState().num}
                <input type="text" />
            </div>
        );
    }
}
