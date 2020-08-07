import { combineReducers } from "redux";
import todo from "./todoList.js";
//把store中的state
//每一个组件都有一个自己独立的initState，一个页面上有两个小模块，一个todo 一个count；分别对应一个自己的initState和自己的reducer；但是一个项目只有一个store，也只有一个state，意味着createStore只能执行一次，那么reducer也只能有一个；所以用到了combineReducers(合并)；store中的state就是这个样式--》{todo:[],count:{}}
let reducer = combineReducers({
    todo,
});
export default reducer;
