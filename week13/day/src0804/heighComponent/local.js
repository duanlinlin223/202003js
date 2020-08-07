import React from "react";
//准备一个高阶函数;函数韩慧一个函数
//抽离两个组件中公共的逻辑
let Local = (key) => (Component) => {
    //Local()()最后返回一个组件；这个组件渲染传进来的Component
    //在local中可以处理公共的逻辑
    return class A extends React.Component {
        constructor() {
            super();
            this.state = {
                [key]: "",
            };
        }
        componentDidMount() {
            this.setState({ [key]: localStorage.getItem(key) });
        }
        render() {
            return <Component {...this.state}></Component>;
        }
    };
};
//导出的是A组件，但是渲染的是UserName
export default Local;
//Local(1)(2); //把local函数的返回值再次执行
