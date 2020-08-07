import React, { Component } from "react";
import { connect } from "react-redux";

class TodoBody extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        console.log(this.props);
        return (
            <div>
                <ul className="list-group">
                    {this.props.todos.map((item, index) => {
                        return (
                            <li className="list-group-item" key={index}>
                                <input
                                    type="checkBox"
                                    checked={item.isSelected}
                                    onChange={() => {}}
                                ></input>
                                {item.val}
                                <button className="btn btn-danger btn-xs pull-right">
                                    x
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default connect((state) => ({ ...state.todo }))(TodoBody);
