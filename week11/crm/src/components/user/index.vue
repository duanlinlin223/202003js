<template>
    <div>
        <div style="margin-bottom:20px;">
            <el-button>全部删除</el-button>
            <el-select v-model="value" @change="selectFn" placeholder="请选择部门">
                <el-option value="0" label="全部部门"></el-option>
                <el-option
                    v-for="item in options"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id"
                ></el-option>
            </el-select>
            <el-input
                style="width:300px;margin-left:20px;"
                placeholder="请输入内容"
                prefix-icon="el-icon-search"
                v-model="val"
                @input="searchFn"
            ></el-input>
        </div>
        <el-table
            ref="multipleTable"
            :data="tableData"
            tooltip-effect="dark"
            style="width: 100%"
            border
            @selection-change="handleSelectionChange"
        >
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column label="姓名" prop="name">
                <!-- <template slot-scope="scope">{{ scope.row.date }}</template> -->
            </el-table-column>
            <el-table-column label="性别">
                <template slot-scope="scope">
                    <!-- scope是tabelData中的 -->
                    <span>{{ scope.row.sex == 0 ? "男" : "女" }}</span>
                </template>
            </el-table-column>
            <el-table-column prop="department" label="部门"></el-table-column>
            <el-table-column prop="job" label="职务"></el-table-column>
            <el-table-column prop="email" label="邮箱"></el-table-column>
            <el-table-column prop="phone" label="电话"></el-table-column>
            <el-table-column prop="desc" label="描述"></el-table-column>
            <el-table-column label="操作" width="200">
                <template slot-scope="scope">
                    <el-button size="mini" @click="editUser(scope.row)">编辑</el-button>
                    <el-button
                        size="mini"
                        type="danger"
                        @click.native.prevent="deleteRow(scope.row)"
                    >删除</el-button>
                    <!-- <el-button size="mini" type="primary">重置</el-button> -->
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
//部门的数据由于好几个组件都会用到该数据，所以放到公共数据中比较方便
//label代表当前这一列的表头
//prop和对象的属性名对应
import { deleteUser } from "@/api/index.js";
export default {
    data() {
        return {
            value: "0",
            val: ""
        };
    },
    created() {
        this.$store.dispatch("changeDepartmentList");
        this.$store.dispatch("changeJobList");
        this.value == "请选择部门";
        this.$store.dispatch("changeUserList", {
            departmentId: parseFloat(this.value),
            search: this.val
        });
        //console.log(this.$store.state.jobList);
    },
    computed: {
        options() {
            return this.$store.state.departmentList;
        },
        tableData() {
            return this.$store.state.userList;
        }
    },
    methods: {
        handleSelectionChange(val) {
            this.multipleSelection = val;
        },
        //搜索框搜索
        searchFn() {
            if (this.val == "") {
                this.$store.dispatch("changeUserList", {
                    departmentId: parseFloat(this.value),
                    search: this.val
                });
            }
            this.$store.state.userList = this.$store.state.userList.filter(
                item => {
                    return item.name.includes(this.val);
                }
            );
        },
        //下拉框搜索部门
        selectFn() {
            if (this.value == "0") {
                this.$store.dispatch("changeUserList", {
                    departmentId: parseFloat(this.value),
                    search: this.val
                });
                //console.log("---");
            }
            this.$store.state.userList = this.$store.state.userList.filter(
                item => {
                    //console.log(item.departmentId);
                    return item.departmentId.includes(this.value);
                }
            );
            this.$store.dispatch("changeUserList", {
                departmentId: parseFloat(this.value),
                search: this.val
            });
        },
        //编辑用户信息
        editUser(cur) {
            this.$router.push({
                path: "/org/addUser",
                query: {
                    id: cur.id
                    // departId: cur.departmentId,
                    // OjobId: cur.jobId
                }
            });
        },
        //删除一行
        deleteRow(cur) {
            //obj.splice(cur, 1);
            //发删除请求
            //console.log(cur);
            this.$confirm("此操作将永久删除数据，是否继续", "提示", {
                confirmButtomText: "确定",
                type: "warning"
            }).then(() => {
                deleteUser(cur.id).then(data => {
                    if (data.code == 0) {
                        this.$message({
                            type: "success",
                            message: "删除成功"
                        });
                        this.$store.dispatch("changeUserList");
                    } else {
                        this.$message({
                            type: "error",
                            message: "删除失败"
                        });
                    }
                });
            });
        }
    }
};
</script>
<style lang="less" scoped></style>
