// state   getState   dispatch   subscribe
function createStore(reducer) {
    // reducer： 是外界传递进来的；
    let state; // 存储数据的
    // 对state进行深度克隆返回
    let getState = () => JSON.parse(JSON.stringify(state));
    let listeners = [];
    function dispatch(action) {
        state = reducer(state, action); // state  action:{type:ADD_COUNT}
        // 每当dispatch都要触发订阅的方法
        listeners.forEach((item) => {
            if (typeof item === "function") {
                item();
            }
        });
    }
    dispatch({}); // 为了初始化state;
    function subscribe(fn) {
        listeners.push(fn);
        return () => {
            listeners.filter((item) => item !== fn);
        };
    }
    return {
        getState,
        dispatch,
        subscribe,
    };
}

let combineReducers = (reducers) => {
    //要返回一个函数；这个函数最后会传递给createStore,最终会在dispatch里面执行这个函数，执行的时候穿了两个实参；
    //第一次执行这个函数的时候是在createState中默认调了一次dispatch，此时的reducer是undefined
    return (state = {}, action) => {
        //这个函数的返回值要给state赋值
        let obj = {};
        for (let key in reducers) {
            //相当于把每个组件对应自己的state传了过去
            obj[key] = reducers[key](state[key], action);
        }
        return obj;
    };
};
export { createStore, combineReducers };
