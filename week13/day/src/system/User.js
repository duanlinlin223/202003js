import React from "react";
import { Link, HashRouter, Switch, Route } from "react-router-dom";
import AddUser from "./AddUser";
import UserList from "./UserList";
import Detail from "./detail";
export default class User extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <div className="col-md-3">
                    <div className="nav">
                        <li>
                            <Link to="/user/add">新增用户</Link>
                        </li>
                        <li>
                            <Link to="/user/list">用户列表</Link>
                        </li>
                    </div>
                </div>
                <div className="col-md-9">
                    <HashRouter>
                        <Switch>
                            <Route
                                path="/user"
                                exact={true}
                                component={AddUser}
                            ></Route>
                            <Route path="/user/add" component={AddUser}></Route>
                            <Route
                                path="/user/list"
                                exact={true}
                                component={UserList}
                            ></Route>
                            <Route
                                path="/user/list/:id"
                                component={Detail}
                            ></Route>
                        </Switch>
                    </HashRouter>
                </div>
            </div>
        );
    }
}
