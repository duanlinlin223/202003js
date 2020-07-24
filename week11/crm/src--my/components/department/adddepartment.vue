<template>
    <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="部门名称">
            <el-input v-model="form.name" style="width:400px"></el-input>
        </el-form-item>
        <el-form-item label="部门描述">
            <el-input type="textarea" v-model="form.desc" style="width:400px"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">提交</el-button>
            <el-button>取消</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
import { updateDepartmentList, addDepartmentList } from "@/api/department.js";

export default {
    data() {
        return {
            form: {
                name: "",
                desc: ""
            }
        };
    },
    created() {
        //1.从部门点击编辑进来
        //2.直接点新增部门进来
        let id = this.$route.query.id;
        let obj = this.$store.state.departmentList.filter(
            item => item.id == id
        )[0];
        // 1.从部门点击编辑进来
        // 2.直接点新增部门
        this.form = obj ? obj : this.form;
    },
    methods: {
        onSubmit() {
            this.$refs.form.validate(flag => {
                //这个是form表单验证的方法
                //如果验证成功那么flag是true
                if (flag) {
                    let id = this.$route.query.id;
                    //传参不一样，如果有id说明是在更新
                    this.form.departmentId = id;
                    //三元运算简写请求方法
                    (id ? updateDepartmentList : addDepartmentList)(
                        this.form
                    ).then(data => {
                        if (data.code == 0) {
                            this.$message(id ? "更新成功" : "新增成功");
                            this.$router.push("/org/department");
                            this.$store.dispatch("changeDepartmentList");
                        }
                    });

                    // if (id) {
                    //     updateDepartmentList(this.form).then((date) => {
                    //         if (data.code == 0) {
                    //             this.$message("更新成功");
                    //         }
                    //     });
                    // } else {
                    //     addDepartmentList(this.form).then((date) => {
                    //         if (data.code == 0) {
                    //             this.$message("新增成功");
                    //         }
                    //     });
                    // }
                }
            });
        }
    }
};
</script>
<style lang="less" scoped></style>
