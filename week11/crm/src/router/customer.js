export default [
    {
        path: "/crm/my",
        name: "my",
        component: () => import("@/components/customer/mycustomer.vue"),
        meta: {
            type: "crm",
            rootTil: "客户管理",
            icon: "el-icon-user-solid",
            til: "我的客户",
            power: "",
        },
    },
    {
        path: "/crm/addcustomer",
        name: "addcustomer",
        component: () => import("@/components/customer/addcus.vue"),
        meta: {
            type: "crm",
            rootTil: "客户管理",
            icon: "el-icon-user-solid",
            til: "新增客户",
            power: "userhandle",
        },
    },
    {
        path: "/crm/all",
        name: "all",
        component: () => import("@/components/customer/allcus.vue"),
        meta: {
            type: "crm",
            rootTil: "客户管理",
            icon: "el-icon-user-solid",
            til: "全部客户",
            power: "allcustomer",
        },
    },
    {
        path: "/crm/visit",
        name: "visit",
        component: () => import("@/components/customer/visit.vue"),
        meta: {
            type: "crm",
            rootTil: "",
            icon: "",
            til: "",
            power: "",
        },
    },
];
