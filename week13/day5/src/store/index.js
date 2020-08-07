import { createStore } from "redux";
import reducers from "./reducers/index.js";
let store = createStore(reducers);
export default store;
