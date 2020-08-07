//专门用来合并reducer的
import todo from "./todo.js";
import count from "./count.js";
// import { combineReducers } from "../../redux.js";

import { combineReducers } from "redux"; //第三方模块

//把多个reducer合并成一个reducer，最终的state也是一个合并之后的对象{count:{},todo:{}}
//这个函数的返回值给了state
// let combineReducers = (reducers) => {
//     //要返回一个函数；这个函数最后会传递给createStore,最终会在dispatch里面执行这个函数，执行的时候穿了两个实参；
//     //第一次执行这个函数的时候是在createState中默认调了一次dispatch，此时的reducer是undefined
//     return (state = {}, action) => {
//         //这个函数的返回值要给state赋值
//         let obj = {};
//         for (let key in reducers) {
//             //相当于把每个组件对应自己的state传了过去
//             obj[key] = reducers[key](state[key], action);
//         }
//         return obj;
//     };
// };
//count存的是reducer 里面的那个函数
//todo存的是reducer 里面的那个函数
let reducer = combineReducers({ count: count, todo: todo });

export default reducer;
