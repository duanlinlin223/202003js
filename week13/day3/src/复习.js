//crm管理系统  悟空 企管宝(OA系统  订单系统) 课程系统
import React, { Component } from "react";
import ReactDOM from "react-dom";
ReactDOM.render(<div></div>, document.querySelector("#root"));
class Parent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    add = () => {};
    render() {
        return (
            <div>
                <button onClick={this.add}></button>
            </div>
        );
    }
}

/*
复习:
JSX语法 
createElement render封装
组件：function 和class声明
两者区别)：class声明组件 有this  状态 生命周期；
//视图更新  ：props属性{从外面(行间)传递到组件内部的就是属性}和state状态{constructor中初始化的state}

setState：不能保证是异步的；（放在定时器里面就是同步的）；setState({}) 会覆盖 setState(prevState=>{return {} })用这种函数形式不会覆盖

生命周期：defaultProps(默认是生命周期，但是他不是函数)-->constructor-->componentWillMount-->render-->componentDidMount 
组件更新时:shouldComponentUpdata(nextProps,nextState)-->componentWillUpdate--> render--> componentDidUpdate
组件卸载：componentWillUnmount

子组件里的生命周期：componentWillReceiveProps(子组件接收新的数据被调用) 

事件绑定：驼峰方式
 受控组件和非受控组件 input框 有value 要配合onChange事件

 父传子：this.props直接取值
 子传父：传事件 让子组建触发

 ref:获取元素、this.refs.a  
 字符串--》this.refs

 函数形式：ref={(x)=>{this.x=x}};最终把元素放在实例上







*/
