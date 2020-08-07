//actions中导出一个对象，对象的属性名都是函数，这个函数返回一个dispatch所需要的action{}
import * as Types from "../action-type.js";

//把action改成函数
export default {
    add() {
        //可以在这个函数中发请求
        return { type: Types.ADD_COUNT };
    },
    min() {
        //可以在这个函数中发请求
        return { type: Types.MIN_COUNT };
    },
};
