import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers/index";
import logger from "redux-logger";
import reduxThunk from "redux-thunk";
import reduxPromise from "redux-promise";
//redux-logger redux-thunk redux-promise
//redux-logger:能够在控制台直观的看到更改状态的type类型以及更改状态前后的值

//步骤：1倒入中间件2使用中间件
//发请求：把请求回来的数据更改store中的state；
let store = createStore(
    reducer,
    applyMiddleware(logger, reduxThunk, reduxPromise)
);
export default store;
