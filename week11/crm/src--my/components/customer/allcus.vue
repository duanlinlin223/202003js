<!--  -->
<template>
    <div class>
        <div class="topBox rt">
            <el-select v-model="type" @change="selectType" placeholder="请选择">
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.label"
                ></el-option>
            </el-select>
            <el-input v-model="search" style="width:300px" placeholder="请输入内容"></el-input>
        </div>
        <div class="tabBox clear">
            <el-table :data="array" border>
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
                    <el-button size="mini" type="primary">编辑</el-button>
                    <el-button size="mini" type="danger">删除</el-button>
                    <el-button size="mini" plain>回访记录</el-button>
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
import { allCustomer } from "@/api/cus.js";
export default {
    data() {
        return {
            options: [
                {
                    value: "全部客户",
                    label: "全部客户"
                },
                {
                    value: "一般客户",
                    label: "一般客户"
                },
                {
                    value: "重点客户",
                    label: "重点客户"
                }
            ],
            array: [],
            limit: 10,
            page: 1,
            total: 99,
            totalPage: 10,
            ly: "all",
            type: "",
            search: ""
        };
    },
    //生命周期 - 创建完成（访问当前this实例）
    created() {
        this.getAllCusLIst();
        //console.log(this.array);
    },
    methods: {
        getAllCusLIst() {
            let obj = {
                limit: this.limit,
                page: this.page,
                // total: this.total,
                // totalPage: this.totalPage,
                lx: this.lx,
                type: this.type,
                search: this.search
            };
            allCustomer(obj).then(data => {
                if (data.code == 0) {
                    // console.log(data);
                    this.array = data.data;
                }
            });
        },
        selectType() {
            let obj = {
                limit: this.limit,
                page: this.page,
                lx: this.lx,
                type: this.type,
                search: this.search
            };
            allCustomer(obj).then(data => {
                if (data.code == 0) {
                    //console.log(data);
                    this.array = data.data;
                }
            });
        },
        handleSizeChange(size) {
            this.totalPage = size;
            console.log(size);
        },
        handleCurrentChange(val) {
            // 改变默认的页数
            this.page = val;
            this.getAllCusLIst();
        }
    },
    //生命周期 - 挂载完成（访问DOM元素）
    mounted() {}
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
// .el-button + .el-button {
//     display: block;
//     margin: 0 auto;
// }
</style>