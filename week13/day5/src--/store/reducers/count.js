//reducer文件中都是存放的更改数据的reducer的方法
//把action-type导入进来
//把action-type导出的所有变量都放到了types这个对象中
import * as Types from "../action-type.js";
let initState = { num: 11 };
// 把initState赋值给store中的state；
function reducer(state = initState, action) {
    switch (action.type) {
        case Types.ADD_COUNT:
            return { ...state, num: state.num + 1 };
            break;
        case Types.MIN_COUNT:
            return { ...state, num: state.num - 1 };
    }
    return state;
}
export default reducer;
