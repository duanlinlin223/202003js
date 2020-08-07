import React, { Component } from "react";

export default class SliderItem extends Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        //轮播是控制该ul的left值，设置他的style；只要让这个style是根据状态改变而改变的；
        let style = {
            left: -this.props.index * 400 + "px",
            //transition：0.5s是动画过度的时间
            transition: "left 0.5s linear",
        };
        //ref的x相当于ul元素，把ul元素给this新增a属性上
        return (
            <ul className="wrapper" style={style} ref={this.props.slid}>
                {this.props.imgs.map((item, index) => {
                    return (
                        <li key={index}>
                            <img src={item} />
                        </li>
                    );
                })}
            </ul>
        );
    }
}
