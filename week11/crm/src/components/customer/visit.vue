<!--  -->
<template>
    <div class="visit">
        <div class="visitLeft">
            <el-table :data="tableData" border style="width: 100%">
                <el-table-column prop="customerId" label="编号" width="180"></el-table-column>
                <el-table-column prop="customerName" label="姓名" width="180"></el-table-column>
                <el-table-column prop="visitTime" label="日期" width="180"></el-table-column>
                <el-table-column prop="visitText" label="回访纪要"></el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button size="mini" type="danger" @click="handleDelete(scope.row)">删除</el-button>
                        <el-button size="mini" type="primary" @click="handleEidt(scope.row)">编辑</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <div class="visitRight">
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="拜访日期">
                    <el-date-picker
                        v-model="valueDate"
                        type="date"
                        placeholder="选择日期"
                        format="yyyy-MM-dd"
                        value-format="yyyy-MM-dd"
                    ></el-date-picker>
                </el-form-item>
                <el-form-item label="拜访纪要">
                    <el-input type="textarea" v-model="textarea"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="handleSubmit">立即创建</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
import { getVisitList, addVisit, updateVisit, deleteVisit } from "@/api/cus.js";
export default {
    data() {
        return {
            form: {},
            tableData: [],
            valueDate: "",
            textarea: "",
            visitId: "",
            id: "",
        };
    },
    //生命周期 - 创建完成（访问当前this实例）
    created() {
        this.getVList();
    },
    methods: {
        //获取回访列表
        getVList() {
            let id = this.$route.query.id;
            //console.log(id);
            getVisitList(id).then((data) => {
                //console.log(data.data);
                if (data.code == 0) {
                    this.tableData = data.data;
                }
            });
        },
        handleEidt(row) {
            this.valueDate = row.visitTime;
            this.textarea = row.visitText;
            this.visitId = row.id;
            this.customerId = row.customerId;
        },
        //新增和修改回访
        handleSubmit() {
            let obj = {
                visitId: this.visitId,
                customerId: this.$route.query.id,
                visitText: this.textarea,
                visitTime: this.valueDate,
            };
            console.log(this.valueDate);
            (this.visitId ? updateVisit : addVisit)(obj).then((data) => {
                if (data.code == 0) {
                    this.$message(this.visitId ? "更新成功" : "新增成功");
                    this.$router.push("/crm/all");
                }
            });
        },
        //删除回访记录
        handleDelete(row) {
            console.log(row);
            deleteVisit(row.id).then((data) => {
                if (data.code == 0) {
                    this.$message("删除成功");
                    this.$router.push("/crm/all");
                } else {
                    this.$message("删除失败");
                }
            });
        },
    },
    //生命周期 - 挂载完成（访问DOM元素）
    mounted() {},
};
</script>
<style lang='less' >
.asideBox {
    .router-link-active {
        li {
            background-color: rgb(84, 92, 100) !important;
        }
    }
}
.visit {
    height: 100%;
}
.visitLeft {
    float: left;
    width: 60%;
    height: 100%;
}
.visitLeft .el-table {
    width: 95% !important;
}
.has-gutter {
    background: #ebeef5;
}
.visitRight {
    float: right;
    width: 40%;
    height: 100%;
}
.jiyao {
    span {
        float: left;
    }
    .el-textarea {
        float: left;
    }
}
</style>