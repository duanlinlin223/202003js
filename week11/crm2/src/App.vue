<template>
    <div id="app">
        <router-view />
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
* {
    margin: 0;
    padding: 0;
    list-style: none;
}
a {
    text-decoration: none;
    color: #fff;
}
.lt {
    float: left;
}
.rt {
    float: right;
}
.clear::after {
    content: "";
    display: block;
    clear: both;
}
</style>
