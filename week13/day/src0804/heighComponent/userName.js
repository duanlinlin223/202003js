import React, { Component } from "react";
import Local from "./local.js";
class UserName extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = { user: "" };
    // }
    // componentDidMount() {
    //     //当DOM加载完重新对state赋值
    //     this.setState({ user: localStorage.getItem("user") });
    // }
    render() {
        return (
            <div>
                用 户：
                <input
                    type="text"
                    value={this.props.user}
                    onChange={() => {}}
                />
            </div>
        );
    }
}

export default Local("user")(UserName);
