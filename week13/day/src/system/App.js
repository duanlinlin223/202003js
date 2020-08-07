import React, { Component } from "react";
import Nav from "./nav";
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        //分为两部分 头部和组件切换的地方
        return (
            <div className="container">
                <div className="row">
                    {/* 导航部分 */}
                    <Nav></Nav>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default App;
