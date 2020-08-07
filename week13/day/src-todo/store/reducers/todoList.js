import * as Types from "../action-types.js";
let initState = {
    type: "all",
    todos: [
        { id: 1, isSelected: false, val: "去吃饭" },
        { id: 2, isSelected: false, val: "去跑步" },
    ],
};
//对于todo的reducer中的state；就是store中state的todo的属性值 todo这个模块的数据
function todo(state = initState, action) {
    switch (action.type) {
        case Types.ADD_TODO:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    { id: Date.now(), isSelected: false, val: action.val },
                ],
            };
        case Types.DEL_TODO:
            let newTodo = state.todos.filter((item) => item.id !== action.id);
            return {
                ...state,
                todos: newTodo,
            };
        case Types.CHANGE_TYPE:
            //找到id匹配的那一项，把这一项的isSelected进行取反饭后重新复制
            let newTodos = state.todos.map((item) => {
                if (item.id === action.id) {
                    item.isSelected = !item.isSelected;
                }
                return item;
            });
            return {
                ...state,
                todos: newTodos,
            };
        case Types.CHANGE_VAL:
            return {
                ...state,
                type: action.val,
            };
    }
    return state;
}
export default todo;
