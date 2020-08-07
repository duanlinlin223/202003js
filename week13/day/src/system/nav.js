import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <nav className="navbar navbar-default navbar-fixed-top">
                <ul className="nav navbar-nav">
                    <li>
                        <Link to="/home">珠峰管理系统</Link>
                    </li>
                    <li>
                        <Link to="/home">首页</Link>
                    </li>
                    <li>
                        <Link to="/Profile">个人中心</Link>
                    </li>
                    <li>
                        <Link to="/User">用户</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Nav;
