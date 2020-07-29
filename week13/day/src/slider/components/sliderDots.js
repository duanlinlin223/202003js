import React, { Component } from "react";

export default class SliderDots extends Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        // console.log(this.props);
        return (
            <ul className="focus">
                {this.props.imgs.map((item, index) => {
                    //最后一张图片是第一张，所以最后不需要渲染,循环到最后返回一个null
                    if (index == this.props.imgs.length - 1) {
                        return;
                    }
                    //图片显示哪一张，让哪一个li有对应的class：active
                    //slider组件的状态的index代表了当前显示第几张的索引；只要和这个li的index相同
                    //当slider状态中的index是3时，此时显示最后一张，此时也应该让第一个li有active；
                    //this.props.index:当前第几张图片的索引
                    //index:这个index是li的索引
                    return (
                        <li
                            key={index}
                            className={
                                this.props.index === index ||
                                this.props.index - index === 3
                                    ? "active"
                                    : null
                            }
                            //控制全局的index从而达到控制视图显示第几个
                            onClick={() => {
                                this.props.turn(index - this.props.index);
                            }}
                        ></li>
                        //点击li时，目的是想让全局的index和当前的点击的li的index相同
                    );
                })}
            </ul>
        );
    }
}
