// 如果是index.vue ;是可以省略的；
import user from "@/components/user";
import addUser from "@/components/user/add.vue";
import department from "@/components/department";
import addDepartment from "@/components/department/adddepartment.vue";
import job from "@/components/job";
import addJob from "@/components/job/addjob.vue";
export default [
    {
        path:"/org/user",
        name:"user",
        component:user,
        meta:{
            type:"user",
            rootTil:"员工管理",
            icon:"el-icon-user",
            til:"员工列表",
            power:"userhandle"
        }
    },
    {
        path:"/org/addUser",
        name:"addUser",
        component:addUser,
        meta:{
            type:"user",
            rootTil:"员工管理",
            icon:"el-icon-user",
            til:"新增员工",
            power:"userhandle"
        }
    },
    {
        path:"/org/department",
        name:"department",
        component:department,
        meta:{
            type:"department",
            rootTil:"部门管理",
            icon:"el-icon-s-operation",
            til:"部门列表",
            power:"departhandle"
        }
    },
    {
        path:"/org/addDepartment",
        name:"addDepartment",
        component:addDepartment,
        meta:{
            type:"department",
            rootTil:"部门管理",
            icon:"el-icon-s-tools",
            til:"新增部门",
            power:"departhandle"
        }
    },
    {
        path:"/org/job",
        name:"job",
        component:job,
        meta:{
            type:"job",
            rootTil:"职务管理",
            icon:"el-icon-s-tools",
            til:"职务列表",
            power:"jobhandle"
        }
    },
    {
        path:"/org/addJob",
        name:"addJob",
        component:addJob,
        meta:{
            type:"job",
            rootTil:"职务管理",
            icon:"el-icon-s-tools",
            til:"新增职务",
            power:"jobhandle"
        }
    }
    
]