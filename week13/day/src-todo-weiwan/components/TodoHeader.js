import React, { Component } from "react";
import { connect } from "react-redux";
import action from "../actions/todolist.js";

class TodoHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    add = (e) => {
        if (e.keyCode === 13) {
            this.props.addTodo(e.target.value);
            e.target.value = "";
        }
        //组件绑定事件：action-types[常量]-->actions-->组件调用actions中方法-->reducer
    };
    render() {
        console.log(this.props);
        return (
            <div>
                <h2>
                    您还有
                    {this.props.todos.filter((item) => !item.isSelected).length}
                    件事情未完成
                </h2>
                <input
                    type="text"
                    className="form-control"
                    onKeyUp={this.add}
                />
            </div>
        );
    }
}

export default connect((state) => ({ ...state.todo }), action)(TodoHeader);
