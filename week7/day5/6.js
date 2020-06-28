let bar = require("./5.js");// 如果是同级的也不能去掉./;
let fs = require("fs");
let axios = require("axios");
console.log(axios);
// cannot find module of "fsa";找不到fsa模块
// console.log(fs);
// console.log(bar);
bar.a();
// 让这个文件在node环境中运行;这个bar就是5.js中module.exports的属性值;