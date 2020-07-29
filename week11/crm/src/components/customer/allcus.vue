<!--  -->
<template>
    <div class>
        <div class="topBox rt">
            <el-select v-model="value" @change="selectType" placeholder="请选择">
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.label"
                ></el-option>
            </el-select>
            <el-input v-model="search" style="width:300px" @input="searchFn" placeholder="请输入内容"></el-input>
        </div>
        <div class="tabBox clear">
            <el-table :data="curData" border>
                <el-table-column prop="name" label="姓名" width="100"></el-table-column>
                <el-table-column label="性别" width="50">
                    <template slot-scope="scope">
                        <!-- scope是tabelData中的 -->
                        <span>{{ scope.row.sex == 0 ? "男" : "女" }}</span>
                    </template>
                </el-table-column>
                <el-table-column prop="email" label="邮箱"></el-table-column>
                <el-table-column prop="phone" label="电话"></el-table-column>
                <el-table-column prop="weixin" label="微信"></el-table-column>
                <el-table-column prop="QQ" label="QQ"></el-table-column>
                <el-table-column prop="type" label="类型"></el-table-column>
                <el-table-column prop="userId" label="率属人"></el-table-column>
                <el-table-column prop="address" label="地址"></el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button size="mini" type="primary" @click="handleEidt(scope.row)">编辑</el-button>
                        <el-button
                            size="mini"
                            type="danger"
                            @click.native.prevent="deleteRow(scope.row)"
                        >删除</el-button>
                        <el-button size="mini" plain @click="handleVisit(scope.row)">回访记录</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination
                :page-size="limit"
                :pager-count="7"
                layout="prev, pager, next"
                :total="total"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
            ></el-pagination>
        </div>
    </div>
</template>

<script>
import { deleteCus } from "@/api/cus.js";
export default {
    data() {
        return {
            options: [
                {
                    value: "全部客户",
                    label: "全部客户",
                },
                {
                    value: "一般客户",
                    label: "一般客户",
                },
                {
                    value: "重点客户",
                    label: "重点客户",
                },
            ],
            value: "",
            array: [],
            limit: 10,
            page: 1,
            total: 105,
            totalPage: 11,
            lx: "all",
            type: "",
            search: "",
        };
    },
    //生命周期 - 创建完成（访问当前this实例）
    created() {
        this.$store.dispatch("changeCusList");
        //console.log(this.$store.state.cusList);
    },
    computed: {
        curData() {
            return this.$store.state.cusList;
        },
    },
    methods: {
        selectType() {
            //console.log(this.$store.state.cusList);
            if (this.value == "全部客户") {
                this.$store.dispatch("changeCusList", {
                    lx: this.lx,
                    search: this.search,
                    limit: this.limit,
                    page: this.page,
                });
            }
            this.$store.state.cusList = this.$store.state.cusList.filter(
                (item) => {
                    return item.type.includes(this.value);
                }
            );
            this.$store.dispatch("changeCusList", {
                lx: this.lx,
                type: this.value,
                search: this.search,
                limit: this.limit,
                page: this.page,
            });
        },
        searchFn() {
            this.$store.state.cusList = this.$store.state.cusList.filter(
                (item) => {
                    return item.name.includes(this.search);
                }
            );
            this.$store.dispatch("changeCusList", {
                lx: this.lx,
                type: this.value,
                search: this.search,
                limit: this.limit,
                page: this.page,
            });
        },
        //编辑
        handleEidt(row) {
            this.$router.push({
                path: "/crm/addcustomer",
                query: {
                    id: row.id,
                },
            });
        },
        //删除
        deleteRow(row) {
            // console.log(row.id);
            this.$confirm("此操作将永久删除数据，是否继续?", "提示", {
                confirmButtonText: "确定",
                type: "wraning",
            }).then(() => {
                deleteCus(row.id).then((data) => {
                    if (data.code == 0) {
                        this.$message({
                            type: "success",
                            message: "删除成功",
                        });
                        this.$store.dispatch("changeCusList");
                    }
                });
            });
        },
        //回访
        handleVisit(row) {
            //console.log(row);
            this.$router.push({
                path: "/crm/visit",
                query: {
                    id: row.id,
                },
            });
        },

        handleSizeChange(size) {
            this.totalPage = size;
        },
        handleCurrentChange(val) {
            // 改变默认的页数
            this.page = val;
            this.$store.dispatch("changeCusList", {
                lx: this.lx,
                search: this.search,
                limit: this.limit,
                page: this.page,
            });
        },
    },
    //生命周期 - 挂载完成（访问DOM元素）
    mounted() {},
};
</script>
<style lang='less'>
.topBox {
    margin-bottom: 20px;
}
.el-table td,
.el-table th {
    line-height: 14px;
}
.el-table .cell {
    line-height: 18px;
}
.el-button--mini,
.el-button--mini.is-round {
    padding: 4px;
}
</style>