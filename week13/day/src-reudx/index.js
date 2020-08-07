import React from "react";
import ReactDOM from "react-dom";
import Counter from "./component/counter";
import Compute from "./component/compute";
//先引入react-redux模块中的provider
import { Provider } from "react-redux";
import store from "./store/index.js";
ReactDOM.render(
    <Provider store={store}>
        <Counter></Counter>
        <Compute></Compute>
    </Provider>,
    document.querySelector("#root")
);
