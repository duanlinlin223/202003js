//index.js创建的store并且导出store
import createStore from "../redux.js";
import reducer from "./reducers/count.js";
let store = createStore(reducer);

export default store;
