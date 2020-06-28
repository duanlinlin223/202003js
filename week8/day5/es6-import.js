// import 后缀名不可以省略
// import {a as time} from './4.es6的模块管理.js';
// import {fn} from "./4.es6的模块管理.js"
// * ： 把导入文件中所有变量都导进来放在该模块下obj这个对象中；当使用这个变量时，obj.a
//console.log(333);

//import  有提升作用，会在代码执行之前先导入
// import * as obj from "./es6模块js.js";
import fn from './es6模块js.js';
fn();
// 导入的变量不可以直接更改其value值；只能读取，不能修改
// import :导入 后面跟一个大括号，括号中包含了变量的名字，这个变量名和导出的接口变量名相同
// obj.c.ff = 333;
// console.log(obj.c,fn);
// console.log(obj);

// obj.fn()
// console.log(obj.a);

// 现在浏览器不能直接支持这种语法，需要webpack对其进行编译就可以支持；
