export default [
    {
        path: "/crm/allcus",
        name: "allcus",
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
        path: "/crm/mycustomer",
        name: "mycustomer",
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
        path: "/crm/addcus",
        name: "addcus",
        component: () => import("@/components/customer/addcus.vue"),
        meta: {
            type: "crm",
            rootTil: "客户管理",
            icon: "el-icon-user-solid",
            til: "新增客户",
            power: "userhandle",
        },
    },
];
