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
        <el-form-item label="部门">
            <el-select v-model="form.department" @change="change" placeholder="请选择部门">
                <el-option
                    :label="item.name"
                    v-for="item in departmentList"
                    :value="item.id"
                    :key="item.id"
                >{{item.name}}</el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="职务">
            <el-select v-model="form.job" @change="change1" placeholder="请选择职务">
                <el-option
                    :label="item.name"
                    v-for="item in jobList"
                    :key="item.id"
                    :value="item.id"
                >{{item.name}}</el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="自我介绍">
            <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
            <el-button>取消</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
import { addUser, updateUser } from "@/api/index.js";
export default {
    data() {
        return {
            form: {
                name: "",
                email: "",
                phone: "",
                sex: "",
                desc: "",
                department: "",
                job: "",
                departmentId: "",
                jobId: "",
            },
        };
    },
    created() {
        this.$store.dispatch("changeDepartmentList");
        this.$store.dispatch("changeJobList");
        let id = this.$route.query.id;
        let obj = this.$store.state.userList.filter((item) => item.id == id)[0];
        this.form = obj ? obj : this.form;
        //console.log(this.form);
    },
    computed: {
        departmentList() {
            return this.$store.state.departmentList;
        },
        jobList() {
            return this.$store.state.jobList;
        },
    },
    methods: {
        change(e) {
            this.form.departmentId = e;
        },
        change1(e) {
            this.form.jobId = e;
        },
        onSubmit() {
            this.$refs.form.validate((flag) => {
                if (flag) {
                    let id = this.$route.query.id;
                    this.form.userId = id;
                    this.departmentId = this.form.departmentId;
                    this.jobId = this.form.jobId;
                    (id ? updateUser : addUser)(this.form).then((data) => {
                        if (data.code == 0) {
                            console.log(data);
                            this.$message(id ? "更新成功" : "新增成功");
                            this.$router.push("/org/user");
                            this.$store.dispatch("changeUserList");
                            //this.$store.dispatch("changeJobList");
                        }
                    });
                }
            });
        },
    },
};
</script>
<style lang="less" scoped></style>
