import * as Types from "../action-types.js";
let initState = { num: 30 };
function counter(state = initState, action) {
    switch (action.type) {
        case Types.ADD_COUNTER:
            return { ...state, num: state.num + 1 };
    }
    return state;
}
export default counter;
