import http from "./http.js";

//获取全部客户列表
export function allCustomer(option) {
    return http.get("/customer/list", {
        params: option,
    });
}

//删除客户列表
export function deleteCus(id) {
    return http.get("/customer/delete", {
        params: {
            customerId: id,
        },
    });
}

//新增客户列表
export function addCus(option) {
    return http.post("/customer/add", option);
}

//修改客户列表
export function updateCus(option) {
    return http.post("/customer/update", option);
}

//获取回访列表
export function getVisitList(id) {
    return http.get("/visit/list", {
        params: {
            customerId: id,
        },
    });
}

//新增回访信息
export function addVisit(option) {
    return http.post("/visit/add", option);
}

//更新回访信息
export function updateVisit(option) {
    return http.post("/visit/update", option);
}

//删除回访记录
export function deleteVisit(id) {
    return http.get("/visit/delete", {
        params: {
            visitId: id,
        },
    });
}
