//请求中，如果是异步请求，回来的数据更改state，那么需要在actions中发送请求；
import {
    getDepartmentList,
    getUserList,
    deleteDepartmentList,
    addUser,
    updateUser,
} from "../api/index.js";
import { getJobList } from "@/api/job.js";
import { allCustomer, addCus } from "@/api/cus.js";
export function changeDepartmentList({ commit }, option) {
    //  由于请求是异步的，可以在这个方法中请求数据，并且通过commit提交，触发mutations中的方法，从而更改store中的数据；
    getDepartmentList().then((data) => {
        //data是请求回来的数据；
        if (data.code == 0) {
            commit("changeDepartmentList", data.data);
        }
    });
}
export function changeJobList({ commit }, option) {
    //  由于请求是异步的，可以在这个方法中请求数据，并且通过commit提交，触发mutations中的方法，从而更改store中的数据；
    getJobList().then((data) => {
        if (data.code == 0) {
            commit("changeJobList", data.data);
        }
    });
}
export function changeUserList({ commit }, option) {
    //  由于请求是异步的，可以在这个方法中请求数据，并且通过commit提交，触发mutations中的方法，从而更改store中的数据；
    getUserList(option).then((data) => {
        //console.log(data);
        if (data.code == 0) {
            //console.log(data)
            commit("changeUserList", {
                data: data.data,
            });
        }
    });
}

export function changeCusList({ commit }, option) {
    //  由于请求是异步的，可以在这个方法中请求数据，并且通过commit提交，触发mutations中的方法，从而更改store中的数据；
    allCustomer(option).then((data) => {
        //console.log(data);
        if (data.code == 0) {
            // console.log(data);
            commit("changeCusList", {
                data: data.data,
            });
        }
    });
}
