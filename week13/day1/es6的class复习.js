// function Fn(){
//     this.x = 100;
// }
// Fn.prototype.getx=function(){

// }
// // 每天都有面试，每个面试都有总结；
// let f = new Fn;//{x:100}

// ES6 : 前端js规范； 为了能够开发大型的应用程序；Es6模块管理；import  export
// require  module.exports ==> common.js
// 引入js方式都是script的src;script标签必须存在html中；但是在单页面应用中，html只有一个；es6模块管理；===> webpack

// 移动端 ： hybride :混合模式开发；移动端；公司有一个andriod  ios工程师；前端；前端向安卓发送请求的方式进行信息的传递；
class Fn {
    constructor() {
        // this==> 实例
        this.a = 100;
    }
    // 原型上的方法
    getX() {}
    static a = 100;
}
class A extends Fn {
    constructor() {
        super();
    }
    // A 继承了Fn的私有属性和公有属性，类A的实例可以使用Fn的私有属性和公有属性
}
