import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch, Link } from "react-router-dom";
import App from "./App.js";
import Home from "./Home.js";
import Profile from "./Profile.js";
import User from "./User.js";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
ReactDOM.render(
    <HashRouter>
        <Switch>
            <App>
                <Route path="/" exact={true} component={Home}></Route>
                <Route path="/Home" component={Home}></Route>
                <Route path="/Profile" component={Profile}></Route>
                <Route path="/User" component={User}></Route>
            </App>
        </Switch>
    </HashRouter>,
    document.querySelector("#root")
);
