// Node ： 非阻塞 异步 I/0 
// node.Js单线程,底层是多线程，也可以实现异步
let  sum =(...arg)=>{
    // arg ： 剩余运算符；arg是个数组
    return eval(arg.join("+"))
};
// module.exports = {
//     sum
// }
// 导出； 是该模块的出口；
// console.log(exports);// {}
// console.log(module);

exports.sum = sum;
exports.c = 100;
// __dirname : 代表了当前文件的父级文件的绝对路径
// __filename : 是当前文件的绝对路径
// console.log(__dirname);
// console.log(__filename);
console.log(exports)
// 在Node中解析js时,会默认给该js中的所有代码外层套一个自执行函数；这个函数中有五个参数；分别是 module
// (function(module,require,exports,__dirname,__filename){
// })({})
