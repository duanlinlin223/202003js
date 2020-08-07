import * as Types from "../action-types";
let initState = { num: 0 };
function counter(state = initState, action) {
    switch (action.type) {
        case Types.ADD_COUNT:
            return { ...state, num: state.num + action.n };
        case Types.MIN_COUNT:
            return { ...state, num: state.num - action.n };
    }
    return state;
}
export default counter;
