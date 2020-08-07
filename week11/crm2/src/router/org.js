import user from "@/components/user/index.vue";
import addUser from "@/components/user/add.vue";
import job from "@/components/job/index.vue";
import addJob from "@/components/job/addjob.vue";
import department from "@/components/department/index.vue";
import addDepartment from "@/components/department/adddepartment.vue";
export default [
    {
        path: "/org/user",
        name: "user",
        component: user,
        meta: {
            type: "user",
            rootTil: "员工管理",
            icon: "el-icon-s-custom",
            til: "员工列表",
            power: "userhandle",
        },
    },
    {
        path: "/org/add",
        name: "add",
        component: addUser,
        meta: {
            type: "user",
            rootTil: "员工管理",
            icon: "el-icon-s-custom",
            til: "新增员工",
            power: "userhandle",
        },
    },
    {
        path: "/org/job",
        name: "job",
        component: job,
        meta: {
            type: "job",
            rootTil: "职务管理",
            icon: "el-icon-s-tools",
            til: "职务列表",
            power: "jobhandle",
        },
    },
    {
        path: "/org/addJob",
        name: "addJob",
        component: addJob,
        meta: {
            type: "job",
            rootTil: "职务管理",
            icon: "el-icon-s-tools",
            til: "新增职务",
            power: "jobhandle",
        },
    },
    {
        path: "/org/department",
        name: "department",
        component: department,
        meta: {
            type: "department",
            rootTil: "部门管理",
            icon: "el-icon-s-operation",
            til: "部门列表",
            power: "departhandle",
        },
    },
    {
        path: "/org/adddepartment",
        name: "adddepartment",
        component: addDepartment,
        meta: {
            type: "department",
            rootTil: "部门管理",
            icon: "el-icon-s-operation",
            til: "新增部门",
            power: "departhandle",
        },
    },
];
