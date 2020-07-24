<template>
  <div class="">
      <my-header></my-header>
      <van-tabs v-model="active">
        <van-tab title="关注"  to="/home/fellow">
            <!-- 这个里面是用来渲染组件的 -->
        </van-tab>
        <van-tab title="推荐" to="/home/recommend"></van-tab>
        <van-tab title="热榜" to="/home/hot"></van-tab>
      </van-tabs>
      <router-view></router-view>
  </div>
</template>

<script>
import Head from "./header.vue"
export default {
  name: '',
  data() { 
    return {
      active:0,
      ary:[{to:"/home/fellow"},{to:"/home/recommend"},{to:"/home/hot"}]
    }
  },
  methods:{
    // change(n){// n : 会默认接收到一个索引n;代表当前点击的tab的索引；
    //     // 当点击v-tab组件时，会默认调用v-tabs的change事件；
    //     // console.log(n);
    //     // 编程式导航
    //     this.$router.push(this.ary[n].to);
    // }
  },
  components:{
      "my-header":Head
  }
 }
</script>

<style lang="less" scoped>

</style>