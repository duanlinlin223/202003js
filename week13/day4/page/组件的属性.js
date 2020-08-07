import React, { Component } from "react";
import ReactDOM from "react-dom";
class Bar extends Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return <div>111</div>;
    }
}

ReactDOM.render(<Bar a="100" b="200"></Bar>, document.querySelector("#root"));
