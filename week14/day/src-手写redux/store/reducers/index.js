//专门用来合并reducer的
import count from "./count.js";
import todo from "./todo.js";
let combineReducers = (reducers) => {
    //返回一个函数,返回的这个函数会传递给createStore，最终会在dispatch里面执行这个函数，执行的时候会传两个实参
    //第一次执行这个函数的时候，是在redux中默认调用了一次dispatch
    return (state = {}, action) => {
        //这个函数的额返回值要给state赋值
        let obj = {};
        for (let key in reducers) {
            obj[key] = reducers[key](state[key], action);
        }
        return obj;
    };
};
let reducer = combineReducers({
    count,
    todo,
});
export default reducer;
