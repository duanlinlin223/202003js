// module.exports = {};  require()
// 在es6之前，引入js,都要用到script这个标签；script标签只存在于html文件中;只能通过script来引入js;
// 需求： 在js中引入另一个js;一个js就是一个模块；
// ES6中export：导出  import : 导入 
// export : 用于该模块向其他模块导出的接口
// import : 用于接收其他模块导入的值；
// export var a = 100;
// export var b = 200;
// export 可以导出变量或者函数；
// export必须放在顶级作用域下；可以有多个export

// var a = 100;
// var b = 200;
// var c = {ff:200}
// export function fn(){   
//     console.log('aaaaaa');
// }
// // // as ： 可以对导出的变量进行重新命名；
//  export {a,b,c };
// console.log(888);
//默认导出 export default  只能默认导出一次 

export default function(){
    console.log('export default');
    
}
