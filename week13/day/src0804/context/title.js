import React, { Component } from "react";
import PropTypes from "prop-types";
class Title extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    static contextTypes = {
        num: PropTypes.number,
    };
    render() {
        return <div>{this.context.num}</div>;
    }
}

export default Title;
