<!--  -->
<template>
    <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="用户名">
            <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="性别">
            <el-radio-group v-model="form.sex">
                <el-radio label="0">男</el-radio>
                <el-radio label="1">女</el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item label="邮箱">
            <el-input v-model="form.email"></el-input>
        </el-form-item>
        <el-form-item label="电话">
            <el-input v-model="form.phone"></el-input>
        </el-form-item>
        <el-form-item label="QQ">
            <el-input v-model="form.QQ"></el-input>
        </el-form-item>
        <el-form-item label="微信">
            <el-input v-model="form.weixin"></el-input>
        </el-form-item>
        <el-form-item label="类型">
            <el-select v-model="form.type" placeholder="请选择类型">
                <el-option
                    :label="item.name"
                    v-for="item in typeList"
                    :key="item.label"
                    :value="item.label"
                ></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="顾客地址">
            <el-input type="textarea" v-model="form.address"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="handleCus">立即创建</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
import { addCus, updateCus } from "@/api/cus.js";
export default {
    data() {
        return {
            form: {
                name: "",
                email: "",
                phone: "",
                sex: "",
                weixin: "",
                QQ: "",
                type: "",
                address: "",
            },
            typeList: [
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
        };
    },
    created() {
        let id = this.$route.query.id;
        let obj = this.$store.state.cusList.filter((item) => item.id == id)[0];
        if (obj) {
            this.form.name = obj.name;
            this.form.email = obj.email;
            this.form.phone = obj.phone;
            this.form.sex = obj.sex.toString();
            this.form.QQ = obj.QQ;
            this.form.weixin = obj.weixin;
            this.form.type = obj.type;
            this.form.address = obj.address;
        }
    },
    methods: {
        handleCus() {
            this.$refs.form.validate((flag) => {
                if (flag) {
                    // console.log(flag);
                    if (
                        !this.form.name ||
                        !this.form.type ||
                        !this.form.phone
                    ) {
                        this.$confirm("请输入客户名，电话和选择类别", "提示", {
                            confirmButtonText: "确定",
                        });
                        return;
                    }
                    let id = this.$route.query.id;
                    this.form.customerId = id;
                    (id ? updateCus : addCus)(this.form).then((data) => {
                        if (data.code == 0) {
                            this.$message({
                                type: "success",
                                message: (id ? "更新" : "新增") + "成功",
                            });
                            this.$router.push("/crm/all");
                            this.$store.dispatch("changeCusList");
                        }
                    });
                }
            });
        },
    },
};
</script>
<style lang="less" scoped>
.el-form-item {
    width: 400px;
}
</style>
