<template>
    <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="职务名称">
            <el-input v-model="form.name" style="width:400px"></el-input>
        </el-form-item>
        <el-form-item label="职务描述">
            <el-input
                type="textarea"
                v-model="form.desc"
                style="width:400px"
            ></el-input>
        </el-form-item>
        <!--  v-model="form.checkList" -->
        <el-checkbox-group v-model="checkList">
            <el-checkbox label="userhandle">员工操作权</el-checkbox>
            <el-checkbox label="departhandle">部门操作权</el-checkbox>
            <el-checkbox label="jobhandle">职务操作权</el-checkbox>
            <el-checkbox label="departcustomer">部门客户操作权</el-checkbox>
            <el-checkbox label="allcustomer">全部客户操作权</el-checkbox>
            <el-checkbox label="resetpassword">重置密码操作权</el-checkbox>
        </el-checkbox-group>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">确认提交</el-button>
        </el-form-item>
    </el-form>
</template>
<script>
import { addJobList, UpdateJobList } from "@/api/job.js";
export default {
    data() {
        return {
            form: {
                name: "",
                desc: "",
            },
            checkList: [],
        };
    },
    //生命周期 - 创建完成（访问当前this实例）
    created() {
        let addPower;
        let id = this.$route.query.id;
        let aa = this.$route.query.power;
        let obj = this.$store.state.jobList.filter((item) => item.id == id)[0];
        this.form = obj ? obj : this.form;
        if (id) {
            let power = aa.split("|");
            this.checkList = power;
        }
    },
    methods: {
        onSubmit() {
            this.$refs.form.validate((flag) => {
                if (flag) {
                    let id = this.$route.query.id;
                    this.form.jobId = id;
                    this.form.power = this.checkList.join("|");
                    (id ? UpdateJobList : addJobList)(this.form).then(
                        (data) => {
                            if (data.code == 0) {
                                this.$message(id ? "更新成功" : "新增成功");
                                this.$router.push("/org/job");
                                this.$store.dispatch("changeJobList");
                            }
                        }
                    );
                }
            });
        },
    },
};
</script>
<style lang="less" scoped>
.el-checkbox {
    margin-right: 10px;
    margin-bottom: 10px;
}
</style>
