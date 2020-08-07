// 1.复习
// 把状态和方法放在当前组件的属性上；
// Provider : 是react-redux提供的一个组件
// 1.在所有的组件外面的包一个Provider这个组件，这个组件把store作为属性传了过去
// 2.每个组件返回一个连接后的组件，connect 是一个高阶函数

// mapStateToProps : 映射状态到属性
// mapActionsToProps: 映射actions到属性
// 当解析执行connect时，会默认调用传进来的两个函数执行，把第一个函数的返回值放到当前组件的行间属性上

let mapStateToProps = (state) => {
    // state ===store.getState()
    return { ...state.todo };
};
let mapActionsToProps = (dispatch) => {
    // dispatch ===store.dispatch
    // 包装之后的action return {type:""}
    // 将方法作为属性传递给组件
    return {
        add: () => {
            dispatch(action.add());
        },
        // dispatch  ==> reducer===> 更改state
    };
};

// connect 判断第二个参数如果是对象的话，会默认调用bindCreateAction这个方法；把传递进来的actions进行包装返回；
// connect(mapStateToProps,mapActionsToProps)(Todo);
connect((state) => ({ ...state.todo }), actions)(Todo);
connect((state) => ({ ...state.todo }), actions)(Child);
// <Todo {...mapStateToProps(store.getState())}><Child></Child></Todo>
// 在child组件导出一个连接后的组件

//
// redux: state  getState  dispatch  subscribe
// actions  reducers  action-types  index
