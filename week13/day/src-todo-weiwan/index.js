import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "./components/App.js";
import { Provider } from "react-redux";
import store from "./store/index.js";
ReactDOM.render(
    <Provider store={store}>
        <App></App>
    </Provider>,
    document.querySelector("#root")
);
