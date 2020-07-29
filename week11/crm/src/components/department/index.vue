<template>
    <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="id" label="编号" width="180"></el-table-column>
        <el-table-column prop="name" label="名称" width="180"></el-table-column>
        <el-table-column prop="desc" label="描述"></el-table-column>
        <el-table-column label="操作">
            <!-- 如果需要自定义列中的数据或内容，需要用template来渲染这一列 -->
            <template slot-scope="scope">
                <el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
                <el-button size="mini" type="danger" @click="handleDelete(scope.row)">删除</el-button>
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
import { deleteDepartment } from "@/api/department.js";
export default {
    data() {
        return {};
    },
    created() {
        //created会发送一个请求，获取最新的部门数据
        if (this.$store.state.departmentList.length === 0) {
            this.$store.dispatch("changeDepartmentList");
        }
        //请求的流程
    },
    methods: {
        handleDelete(row) {
            // console.log(row);
            //row是当前这一行对应的数据
            //this是组件的实例
            //$confirm会返回一个promise实例
            this.$confirm("此操作将永久删除数据，是否继续", "提示", {
                confirmButtonText: "确定",
                // cancelButtonText:'取消',
                type: "warning"
            }).then(() => {
                //这个函数会等到点击‘确定’按钮之后，会执行这个方法,相当于promise的resolve
                deleteDepartment(row.id).then(data => {
                    if (data.code == 0) {
                        this.$message({
                            type: "success",
                            message: "删除成功"
                        });
                        //数据删除成功以后，不仅要删除后台的数据，还要删除store的数据
                        this.$store.dispatch("changeDepartmentList");
                    } else {
                        this.$message({
                            type: "error",
                            message: "删除失败"
                        });
                    }
                });
            });
        },
        handleEdit(row) {
            //点击编辑是跳转到新增部门页面
            //路由传参: :id params[name] query[path]
            this.$router.push({
                path: "/org/addDepartment",
                query: { id: row.id }
            });
        }
    },
    computed: {
        tableData() {
            //把异步请求回来的数据放到computed计算属性上
            return this.$store.state.departmentList;
        }
    }
};
</script>
<style lang="less" scoped></style>
