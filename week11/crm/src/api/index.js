//一个模块有一个对应的接口文件
import http from './http' //后缀名是.js所以可以省略
export function isLogin() {
    return http.get('/user/login').then(data => data)
}
export function signout() {
    return http.get("/user/signout").then(data => {
        return data;
    })
}
//获取部门列表 方法
export function getDepartmentList() {
    return http.get('/department/list')
}

//获取员工列表 方法
export function getUserList(option) {
    return http.get('/user/list', {
        params: option
    })
}

//删除用户方法
export function deleteUser(userId) {
    return http.get('/user/delete', {
        params: {
            userId
        }
    })
}

//新增用户方法
export function addUser(option) {
    return http.post('/user/add', option)
}

//修改用户方法
export function updateUser(option) {
    return http.post('/user/update', option)
}