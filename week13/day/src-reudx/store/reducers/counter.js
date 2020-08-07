import * as Types from "../action-types";
let initState={num:30};
function counter(state=initState,action){
    switch (action.type){
        case Types.ADD_COUNT:
            return {...state,num:state.num+1};
    }
    return state;
}
export default counter;