<template>
    <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="id" label="编号" width="100"></el-table-column>
        <el-table-column prop="name" label="职务" width="100"></el-table-column>
        <el-table-column prop="desc" label="描述"></el-table-column>
        <el-table-column label="权限">
            <template slot-scope="scope">{{scope.row.power | trans}}</template>
        </el-table-column>
        <el-table-column label="操作">
            <template slot-scope="scope">
                <el-button size="mini" @click="handleEidt(scope.row)">编辑</el-button>
                <el-button size="mini" type="danger" @click="handDelete(scope.row)">删除</el-button>
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
import { delJobList } from "@/api/job.js";
//后台返给前端的权限:userhandle|departhandle
//请求数据并且更改store中的数据
export default {
    name: "",
    data() {
        return {};
    },
    created() {
        //发送请求
        //需要在组建内部despatch;为什么必须在action中发送请求？因为actions中支持异步
        this.getJobList();
        console.log(this.$store.state.jobList);
    },
    computed: {
        tableData() {
            return this.$store.state.jobList;
        },
    },
    methods: {
        getJobList() {
            //在这个方法中dispatch
            this.$store.dispatch("changeJobList");
        },
        handDelete(row) {
            this.$confirm("此操作将永久删除，是否继续", "提示").then(() => {
                delJobList(row.id).then((data) => {
                    console.log(data);
                    if (data.code == 0) {
                        this.$message({ type: "success", message: "删除成功" });
                        this.$store.dispatch("changeJobList");
                    } else {
                        this.$message({ type: "error", message: "删除失败" });
                    }
                });
            });
        },
        //编辑职位信息
        handleEidt(row) {
            this.$router.push({
                //query传参：点击编辑把当前行的id传递给新增职务组件
                path: "/org/addJob",
                query: { id: row.id },
            });
        },
    },
    filters: {
        trans(val) {
            //val接收当前职务的power "userhandle|jobhandle|departhandle..."

            let obj = {
                userhandle: "员工操作权",
                departhandle: "部门操作权",
                jobhandle: "职务操作权",
                allcustomer: "全部客户",
                departcustomer: "部门客户",
                resetpassword: "重置密码",
            };
            let arr = val.split("|"); //按竖杠分开，得到一个数组;

            return arr.map((item) => obj[item]).join("|");
        },
    },
};
</script>

<style lang="less" scoped>
</style>