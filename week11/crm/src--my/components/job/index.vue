<template>
    <el-table
        :data="tableData"
        border
        :header-cell-style="{ background: '#eef1f6', color: '#606266' }"
        style="width: 100%"
    >
        <el-table-column prop="id" label="编号" width="180"></el-table-column>
        <el-table-column prop="name" label="职务" width="180"></el-table-column>
        <el-table-column prop="desc" label="描述"></el-table-column>
        <el-table-column prop="power" label="权限"></el-table-column>
        <el-table-column prop="address" label="操作">
            <template slot-scope="scope">
                <el-button size="mini" @click="handleEdit(scope.row)"
                    >编辑</el-button
                >
                <el-button
                    size="mini"
                    type="danger"
                    @click="jobDelete(scope.row)"
                    >删除</el-button
                >
                <!-- <el-button size="mini" type="primary">重置</el-button> -->
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
import { deleteJob } from "@/api/job.js";
export default {
    data() {
        return {};
    },
    created() {
        //console.log(this.tableData);
        this.$store.dispatch("changeJobList");
    },
    methods: {
        handleEdit(row) {
            this.$router.push({
                path: "/org/addJob",
                query: { id: row.id, power: row.power },
            });
        },
        jobDelete(row) {
            this.$confirm("此操作将永久删除数据，是否继续", "提示", {
                confirmButtonText: "确定",
                // cancelButtonText:'取消',
                type: "warning",
            }).then(() => {
                //这个函数会等到点击‘确定’按钮之后，会执行这个方法,相当于promise的resolve
                deleteJob(row.id).then((data) => {
                    if (data.code == 0) {
                        this.$message({
                            type: "success",
                            message: "删除成功",
                        });
                        //数据删除成功以后，不仅要删除后台的数据，还要删除store的数据
                        this.$store.dispatch("changeJobList");
                    } else {
                        this.$message({
                            type: "error",
                            message: "删除失败",
                        });
                    }
                });
            });
        },
    },
    computed: {
        tableData() {
            return this.$store.state.jobList;
        },
    },
};
</script>
<style lang="less" scoped></style>
