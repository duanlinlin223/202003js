function a(){
    console.log("我是第5")
}
console.log(100);
module.exports = {
    a:a
}

// 创建三个模块 abc
// a 模块有一个sum求和的方法
// b 模块有一个请求平均数的方法，并且需要去掉最大值和最小值再取平均；
// c : c调用b的的方法求平均数
