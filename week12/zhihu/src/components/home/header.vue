<template>
  <div class="header">
     <div>
        <van-icon class="lt" name="tv-o"></van-icon>
        <van-search placeholder="请输入搜索关键词"></van-search>
        <van-icon class="rt" name="calender-o"></van-icon>
     </div>
  </div>
</template>
<script>
export default {
  name: '',
  data() { 
    return {

    }
  }
 }
</script>

<style lang="less" scoped>

  //  url :"/v4//mweb-feed/content/list"
  // type:"get",
  // params:{
  //         newType:"keji",// 当前请求的type类型
  //         oldType:"tuijian",// 上一次请求的type;
  //         count:10,//每次请求10条数据
  //         reload:true,
  //         cur_step:0,
  //         category:"keji"
  // }
  .header{
      div{
          display: flex;
          align-items:center;
          .lt,.rt{
              width:13vw;
              font-size:8vw;
          }
          >div{
            flex:auto;
          }
      }
  }
</style>