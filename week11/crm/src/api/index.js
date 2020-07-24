// 一个模块有一个对应的接口文件；
import http from "./http";
export function isLogin(){
    return http.get("/user/login").then(data=>{
        return data;
    })
}
export function signout(){
    return http.get("/user/signout").then(data=>{
        return data;
    })
}
// 获取部门列表的方法
export function getDepartmentList(){
    return http.get("/department/list")
}

// 获取员工列表的数据
export function getUserList(option){
    console.log(option);
    return http.get("/user/list",{
        params:option
    })
}
// 删除部门列表的数据
