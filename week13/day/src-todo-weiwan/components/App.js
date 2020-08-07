import React, { Component } from "react";
import { connect } from "react-redux";
import TodoHeader from "./TodoHeader.js";
import TodoBody from "./TodoBody.js";
import TodoFooter from "./TodoFooter.js";
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="container col-md-6 col-md-offset-3">
                <div className="row">
                    <div className="panel panel-danger">
                        <div className="panel-heading">
                            <TodoHeader></TodoHeader>
                        </div>
                        <div className="panel-body">
                            <TodoBody></TodoBody>
                        </div>
                        <div className="panel-footer">
                            <TodoFooter></TodoFooter>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
//export default App;
export default connect((state) => ({ ...state.todo }))(App);
