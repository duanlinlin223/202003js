// 由于部门列表数据在好几个组件都有应用，所以该数据应该放在全局的store中，方便各个组件进行使用；

// 公共数据
// 组件内部的created()-->actions-->调用api中的方法发请求-->commit-->mutation-->公共数据
export default {
    departmentList:[],// 这个是部门列表的数据
    userList : [],// 员工列表的数据
    jobList:[]// 职务的列表
}