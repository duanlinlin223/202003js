import React, { Component } from "react";
import ReactDOM from "react-dom";
import UserName from "./userName.js";
import PassWord from "./passWord.js";
ReactDOM.render(
    <div>
        <UserName></UserName>
        <PassWord></PassWord>
    </div>,
    document.querySelector("#root")
);
