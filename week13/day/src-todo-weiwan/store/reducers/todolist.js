import * as Types from "../action-types.js";
let initState = {
    type: "all",
    todos: [
        { id: 1, isSelected: false, val: "去吃饭" },
        { id: 2, isSelected: false, val: "去跑步" },
        { id: 3, isSelected: false, val: "去挣钱" },
    ],
};
//
function todo(state = initState, action) {
    switch (action.type) {
        case Types.ADD_TODO:
            //
            return {
                ...state,
                todos: [
                    ...state.todos,
                    { id: Date.now(), isSelected: false, val: action.val },
                ],
            };
    }
    return state;
}
export default todo;
