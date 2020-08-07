import React, { Component } from "react";
import ReactDOM from "react-dom";
import Count from "./component/count1";
import Todo from "./component/todo.js";

ReactDOM.render(
    <div>
        <Count></Count>
        <Todo></Todo>
    </div>,
    document.querySelector("#root")
);
