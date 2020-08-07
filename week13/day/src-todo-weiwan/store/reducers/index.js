import { combineReducers } from "redux";
import todo from "./todolist.js";
let reducer = combineReducers({
    todo: todo,
});
export default reducer;
