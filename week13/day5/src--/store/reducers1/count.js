import * as Types from "../action-types.js";
let initState = {
    num: 66,
};

function count(state = initState, action) {
    switch (action.type) {
        case Types.ADD_COUNT:
            return { ...state, num: state.num + action.n };
        case Types.MIN_COUNT:
            return { ...state, num: state.num - action.m };
    }

    return state;
}
export default count;
