import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../store/actions/todolist.js";

class TodoHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    add = (e) => {
        //点击的时候把数据新增到store的state中
        if (e.keyCode === 13) {
            //拿到input的值e.target.value
            this.props.addTodo(e.target.value);
            e.target.value = "";
        }
        //更改数据流程： 组件绑定事件 ==> action-types[常量]===> actions===>组件调用actions中方法===> reducer
    };
    render() {
        return (
            //获取到store中未完成的个数；数据中心isSelected是false的个数
            <div>
                <h2>
                    您还有
                    {this.props.todos.filter((item) => !item.isSelected).length}
                    件事未完成
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
//state：是整个store的state，要拿到当前组件的，只需要...state.todo;
//state.todo:要和conbineReducers属性名保持一致
export default connect((state) => ({ ...state.todo }), actions)(TodoHeader);
