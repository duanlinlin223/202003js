<template>
  <div id="app">
    <!-- 根据路由的配置，显示不同的组件 -->
    <!-- router-link : 改变路由 -->
    <router-view></router-view>
    <!-- 根据路由显示的对应的组件 login.vue   index.vue -->
  </div>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
// 由于APP.vue永远显示，这个地方写的是全局的样式
*{
  margin:0;
  padding:0;
  list-style: none
}

 .lt{
      float:left;
  }
  .rt{
      float:right
  }
  .clear::after{
    content:'';
    display: block;
    clear:both;
  }
</style>
