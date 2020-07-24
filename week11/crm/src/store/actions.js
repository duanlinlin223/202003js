// 如果是异步的请求 回来的数据更改state,那么大家需要在actions发送请求；
import {
    getDepartmentList,
    getUserList
} from "../api/index.js";
import {
    getJobList
} from "../api/job.js";

import http from "../api/http.js";
export function changeDepartmentList({
    commit
}) {
    // 由于请求是异步的，可以在这个方法请求数据，并且通过commit提交，触发mutations中的方法，从而更改store中的数据；
    getDepartmentList().then(data => {
        // data是请求回来的数据；
        if (data.code == 0) {
            commit("changeDepartmentList", data.data);
        }
    });
}
export function changeJobList({
    commit
}) {
    // 由于请求是异步的，可以在这个方法请求数据，并且通过commit提交，触发mutations中的方法，从而更改store中的数据；
    getJobList().then(data => {
        if (data.code == 0) {
            commit('changeJob', data.data)
        }
    })
}
export function changeUserList({
    commit
}, option) {
    // 由于请求是异步的，可以在这个方法请求数据，并且通过commit提交，触发mutations中的方法，从而更改store中的数据；
    getUserList(option).then(data => {
        if (data.code == 0) {
            commit("changeUserList", data.data)
        }
    })
}