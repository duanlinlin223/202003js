import * as Types from "../action-types.js";
// import actions from "../actions/count.js";
let initState = {
    num: 0,
};
function count(state = initState, action) {
    switch (action.type) {
        case Types.ADD_NUM:
            return { ...state, num: state.num + action.n };
        case Types.MIN_NUM:
            return { ...state, num: state.num - action.m };
    }
    return state;
}
export default count;
