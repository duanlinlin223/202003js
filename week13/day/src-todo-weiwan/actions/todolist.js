import * as Types from "../store/action-types.js";
export default {
    addTodo(val) {
        return { type: Types.ADD_TODO, val };
    },
};
