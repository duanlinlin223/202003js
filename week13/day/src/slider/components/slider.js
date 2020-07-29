import React from "react";
import SliderItem from "./sliderItem";
import SliderDots from "./sliderDots";
import SliderArrow from "./sliderArrow";

export default class Slider extends React.Component {
    constructor() {
        super();
        //每隔2秒让index+1
        //不仅sliderItem需要这个index属性，sliderDots和sliderArrow也需要这个属性；所以把状态定义到了该组件下；
        //slider是sliderItem父组件，当父组件状态更新时，会让父组件更新，子组件也会触发update,也会更新。重新执行子组件的render方法；
        this.state = { index: 0 }; //index为0代表显示第一张
    }
    //当DOM加载完毕开始轮播
    componentDidMount() {
        this.go();
    }
    turn = (step) => {
        //index有临界值
        //想控制wrapper的临界值，只需要控制index就可以了；
        if (this.state.index === 3) {
            //在父组件中获取到子组件的元素；
            //this.slider===.wrapper
            this.slider.style.left = "0px";
            this.slider.style.transitionDuration = "0s";
            //由于浏览器解析代码很快,0.5直接将0s覆盖了；0s没有起到任何作用；
            //getComputedStyle:能够页面重绘，确定了每一个元素的确切样式；才向下执行
            let left = window.getComputedStyle(this.slider).left;
            this.slider.style.transitionDuration = "0.5s";
            this.setState({ index: 1 });
            return;
        }
        //当点击向左时，当index已经是0；已经显示第一张
        if (this.state.index + step === -1) {
            this.slider.style.left = "-1200px";
            this.slider.style.transitionDuration = "0s";
            //由于浏览器解析代码很快,0.5直接将0s覆盖了；0s没有起到任何作用；
            //getComputedStyle:能够页面重绘，确定了每一个元素的确切样式；才向下执行
            let left = window.getComputedStyle(this.slider).left;
            this.slider.style.transitionDuration = "0.5s";
            this.setState({ index: 2 });
            return;
        }
        this.setState({ index: this.state.index + step });
    };
    getSlider = (x) => {
        //this指向当前Slider组件
        //把这个方法传给了子组件，当解析子组件时，会执行这个方法；执行这个方法时，把ul元素放在了该组件实例的slider属性上
        //当执行子组件的render函数时，该方法执行；
        this.slider = x;
    };
    go = () => {
        //slider的状态每隔两秒更新一次，所以视图每隔两秒更新一次
        this.timer = setInterval(() => {
            this.turn(1);
        }, 2000);
    };
    render() {
        return (
            <div
                className="container"
                onMouseOver={() => {
                    clearInterval(this.timer);
                }}
                onMouseOut={() => {
                    this.go();
                }}
            >
                <SliderItem
                    imgs={this.props.imgs}
                    index={this.state.index}
                    slid={this.getSlider}
                ></SliderItem>
                {this.props.isDots ? (
                    <SliderDots
                        imgs={this.props.imgs}
                        index={this.state.index}
                        turn={this.turn}
                    ></SliderDots>
                ) : null}

                <SliderArrow turn={this.turn}></SliderArrow>
            </div>
        );
    }
}
