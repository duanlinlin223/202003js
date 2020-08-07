import React from "react";
import ReactDOM from "react-dom";
import Counter from "./component/counter.js";
import store from "./store/index.js";
import { Provider } from "react-redux";
ReactDOM.render(
    <Provider store={store}>
        <Counter></Counter>
    </Provider>,
    document.getElementById("root")
);
