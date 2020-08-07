import React, { Component } from "react";
import Title from "./title";
import PropTypes from "prop-types";
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    //contextTypes:用来接收一下父组件传递过来的数据
    static contextTypes = {
        color: PropTypes.string,
        changeColor: PropTypes.func,
    };
    render() {
        return (
            <div>
                {this.context.color}
                <button onClick={this.context.changeColor}>改变颜色</button>
                <Title></Title>
            </div>
        );
    }
}

export default Header;
