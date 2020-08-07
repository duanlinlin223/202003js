import React from "react";
import ReactDOM from "react-dom";
import Counter from "./component/counter.js";
import Compute from "./component/compute.js";
import { Provider } from "react-redux";
import store from "./store/index.js";
ReactDOM.render(
    <Provider store={store}>
        <Counter></Counter>
        <Compute></Compute>
    </Provider>,
    document.querySelector("#root")
);
