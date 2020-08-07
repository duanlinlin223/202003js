import React from "react";
import {connect} from "./react-redux";
class App extends React.Component{
    constructor(){
        super();
    }
    render(){
        console.log(this.props);
        // 可以获取到组件内部写的内容；是一个数组，那么jsx语法就可以直接渲染这个数组
        return <div>
            {/* 123 */}
            {/* {this.props.children} */}
            </div>
    }
}
// 返回一个连接后的组件
export default connect()(App);