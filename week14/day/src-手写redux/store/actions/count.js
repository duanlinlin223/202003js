import * as Types from "../action-types.js";

export default {
    add(n) {
        return { type: Types.ADD_NUM, n };
    },
    min(m) {
        return { type: Types.MIN_NUM, m };
    },
};
