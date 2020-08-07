import React, { Component } from "react";
import Local from "./local.js";
class PassWord extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = { pass: "" };
    // }
    // componentDidMount() {
    //     //这个地方和user的逻辑和思想是一样的；把这个地方抽离成公共的
    //     this.setState({ pass: localStorage.getItem("pass") });
    // }
    render() {
        return (
            <div>
                密 码：
                <input
                    type="text"
                    value={this.props.pass}
                    onChange={() => {}}
                />
            </div>
        );
    }
}

export default Local("pass")(PassWord);
