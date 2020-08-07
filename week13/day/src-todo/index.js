import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "./components/App.js";
import store from "./store/index.js";
import { Provider } from "react-redux";
//1.需要提供一个Provider将全局包裹起来，并且传入行间属性store；
//2.需要导出一个链接后的组件；组件需要connect()()
//3.connect()() :第一个括号传入两个参数:1.是个函数2.也是函数但是可以简写state=>({...state.todo})
ReactDOM.render(
    <Provider store={store}>
        <App></App>
    </Provider>,
    document.querySelector("#root")
);
