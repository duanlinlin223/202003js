<template>
  <div>
      <div>
        <el-button>全部删除</el-button>
        <el-select v-model="value"  placeholder="请选择部门">
          <el-option value="0" label="全部部门"></el-option>
          <el-option
            v-for="item in options"
            :key="item.id"
            :label="item.name"
            :value="item.id">
          </el-option>
        </el-select>
        <el-input style="width:300px;margin-left:20px" placeholder="请输入内容" prefix-icon="el-icon-search" v-model="val"></el-input>
      </div>

      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        border
        @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column label="姓名" width="120" prop="name"></el-table-column>
        <el-table-column  label="性别" width="120">
            <template slot-scope="scope">
              <!-- scope: 是tabelData中的每一项 -->
              <span>{{scope.row.sex==0?"男":"女"}}</span>
            </template>
        </el-table-column>
        <el-table-column prop="department" label="部门"></el-table-column>
        <el-table-column prop="job" label="职务"></el-table-column>
        <el-table-column prop="email" label="邮箱"></el-table-column>
        <el-table-column prop="phone" label="电话"></el-table-column>
        <el-table-column prop="desc" label="描述"></el-table-column>
        <el-table-column label="操作" width="200">
           <template slot-scope="scope">
              <el-button size="mini">编辑</el-button>
              <el-button size="mini" type="danger" @click.native.prevent="deleteRow(scope.$index,tableData)">删除</el-button>
           </template>
        </el-table-column>
      </el-table>
  </div>
</template>

<script>
//  部门的数据由于好几个组件都会用到该数据，所以放到公共数据中比较方便；
// label : 是当前这一列的表头；
// props和对象的属性名对应；
export default {
  data() { 
    return {
      value:"0",
      val:"",
      // 组件的prop和数据中
    }
  },
  created(){
    // 在created派发actions中的动作；
     this.$store.dispatch("changeDepartmentList");
     this.$store.dispatch("changeUserList",{departmentId:parseFloat(this.value),search:this.val});
  },
  methods:{
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    deleteRow(cur,obj){
      console.log(cur);
      
      obj.splice(cur,1);
    }
  },
  computed:{
    options(){
       return this.$store.state.departmentList;
    },
    tableData(){
      return this.$store.state.userList;
    }
  }
 }
</script>
<style lang="less" scoped>

</style>