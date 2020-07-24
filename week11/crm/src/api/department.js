import http from "./http.js";
// 删除部门列表数据
export function deleteDepartment(departmentId){
    return http.get("/department/delete",{
        params:{
            departmentId
        }
    })
}
// 更新部门的请求
export function updateDepartmentList(option){
    return http.post("/department/update",option)
}
// 新增部门的请求
export function addDepartmentList(option){
    return http.post("/department/add",option)
}