import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../store/actions/todolist.js";
class TodoFooter extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    changeVal = (e) => {
        //e.target是事件源，获取到其行间属性，然后传给这个方法
        this.props.changeVal(e.target.dataset.type);
    };
    render() {
        return (
            <div>
                <ul className="nav nav-pills" onClick={this.changeVal}>
                    <li
                        role="presentation"
                        className={this.props.type === "all" ? "active" : ""}
                    >
                        <a data-type="all">全部任务</a>
                    </li>
                    <li
                        role="presentation"
                        className={this.props.type === "finish" ? "active" : ""}
                    >
                        <a data-type="finish">已完成</a>
                    </li>
                    <li
                        role="presentation"
                        className={
                            this.props.type === "unfinish" ? "active" : ""
                        }
                    >
                        <a data-type="unfinish">未完成</a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default connect((state) => ({ ...state.todo }), actions)(TodoFooter);
