import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "./react-redux.js"
import App from "./App";
let  store = {
    getState:function(){},
    dispatch:function(){},
    subscribe:function(){}
}
// ReactDOM.render(<App>
//     <button>提交</button>
//     <span>信息</span>
// </App>,document.querySelector("#root"));
ReactDOM.render(<Provider  store={store}>
    <App></App>
    {/* <App></App>
    <App></App> */}
</Provider>,document.getElementById("root"));