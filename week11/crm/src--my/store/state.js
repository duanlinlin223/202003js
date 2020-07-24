//由于部门列表数据在好几个组件里有应用，所以应该放在全局中，方便各个组件调用；
//修改公共数据
//组件内部的created()-->action-->调用api中的方法-->commit-->mutation-->公共数据
export default {
    departmentList: [], //这个是部门列表的数据
    userList: [], //员工列表的数据
    jobList: [] //职务列表
}