import React, { Component } from "react";

export default class SliderArrow extends Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (
            <div className="arrow">
                <span
                    className=""
                    onClick={() => {
                        this.props.turn(-1);
                    }}
                >
                    &lt;
                </span>
                <span
                    onClick={() => {
                        this.props.turn(1);
                    }}
                >
                    &gt;
                </span>
            </div>
        );
    }
}
