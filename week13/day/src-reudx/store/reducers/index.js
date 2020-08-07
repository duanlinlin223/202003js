import {combineReducers} from "redux";
import counter from "./counter";
import compute from "./compute";
let reducers = combineReducers({
    counter,
    compute
});
export default reducers;