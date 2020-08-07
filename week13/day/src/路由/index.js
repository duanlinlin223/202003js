import React, { Component } from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch, Link } from "react-router-dom";
//vue-router  router-link  router-view
//切换路由时会更新组件

//
let Home = () => {
    return (
        <div>
            Home
            <Link to="/list">去列表页</Link>
        </div>
    );
};
let List = () => {
    return (
        <div>
            List<Link to="/person">去person页</Link>
        </div>
    );
};
let Person = () => {
    return <div>Person</div>;
};
//Route组件：有个path属性，其属性值对应上页面的hash值，当页面的hash值和这个path值匹配成功就会显示component对应的组件
//Switch:只要匹配到一个符合要求的，那么都不在向下匹配
//exact:如果给该条路由加上exact属性，属性值是true，当前页面的hash值必须和path相同才显示该组件，如果没有，那么页面的hash值中只要包含path的属性，那么就显示
ReactDOM.render(
    <HashRouter>
        <Switch>
            {/* 只要每次更改hash值，那么都会从上到下依次检测是否匹配；如果没有switch那么即便已经匹配成功，也会向下匹配；提高了组件渲染路由的性能 */}
            <Route path="/" exact={true} component={Home}></Route>
            <Route path="/home" component={Home}></Route>
            <Route path="/list" component={List}></Route>
            <Route path="/person" component={Person}></Route>
        </Switch>
    </HashRouter>,
    document.querySelector("#root")
);
