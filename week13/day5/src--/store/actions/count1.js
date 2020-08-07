import * as Types from "../action-types.js";
export default {
    add(n) {
        return { type: Types.ADD_COUNT, n: n };
    },
    min(m) {
        return { type: Types.MIN_COUNT, m: m };
    },
};
