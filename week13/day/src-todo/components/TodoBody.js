import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../store/actions/todolist.js";
class TodoBody extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    del = (id) => {
        // console.log(index);
        this.props.delTodo(id);
    };
    change = (id) => {
        this.props.changeType(id);
    };
    filterTodo = () => {
        //根据不同的type 筛选不同的li列表(筛选出是否完成和全部)
        if (this.props.type === "all") {
            return this.props.todos;
        } else if (this.props.type === "finish") {
            return this.props.todos.filter((item) => item.isSelected);
        } else {
            return this.props.todos.filter((item) => !item.isSelected);
        }
    };
    render() {
        //li应该利用store中的数据渲染出来
        console.log(this.props);
        return (
            <div>
                <ul className="list-group">
                    {this.filterTodo().map((item, index) => {
                        return (
                            <li className="list-group-item" key={index}>
                                <input
                                    type="checkBox"
                                    checked={item.isSelected}
                                    onChange={() => {
                                        this.change(item.id);
                                    }}
                                ></input>
                                {item.val}
                                <button
                                    className="btn-danger btn-xs pull-right"
                                    onClick={() => {
                                        this.del(item.id);
                                    }}
                                >
                                    X
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}
//传入actions 才可以拿到dispatch包装之后的函数
export default connect((state) => ({ ...state.todo }), actions)(TodoBody);
