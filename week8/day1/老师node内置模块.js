// 内置（核心模块）  第三方模块（npm install）   自定义模块
// 核心模块： 是当下载安装node时，一并下载安装好的模块就是核心模块；
// 1.fs ： 文件操作系统模块

let fs = require("fs");
// 1. readFileSync : 同步读取文件内容；读文件是需要消耗时间的；会把读出来的内容给了这个函数的返回值
// let content = fs.readFileSync("./customer.json","utf8");
// console.log(content);

// Node读取文件内容默认是一个buffer的数据流；buffer的范围两位组成 0-9a-f;每一个汉字或是字母都会对应一个固定的buffer数据 客=>一个对应了三个字节；一个字母对应一个；

// 但是对于图片，音频视频，我们读取和传输的过程就是buffer格式的，不需要设置utf8;
/// toString： 可以将buffer字节转成汉字字母数字
// Buffer.from : 将字符串转buffer数据；
// console.log(Buffer.from("杨"))
// console.log(content.toString());

// 2. readFile： 异步 readFile(path,encoding,函数)
// fs.readFile("./customer1.json","utf8",function(err,result){
//     // 如果有错误，err: 这个参数代表了错误信息；result是undefined；
//     // 如果能够正常读出数据，那么err是null ;
//     // result :就是读出来的数据
//     console.log(err,result);
// });


// 3. writeFileSync： 会覆盖源文件里面的内容; 同步的方法；
// ；通过代码实现修改文件内容
// writeFileSync(path,内容,编码格式)
// fs.writeFileSync("./3.txt","杨羽鹤是个美女");


// 4. writeFile writeFile(path,内容,encoding,callback);
// fs.writeFile("./3.txt","欢迎新同学","utf8",function(){
//     // 当成功的写完以后，会触发该回调函数
//     console.log("已成功修改");
// });
// 先读取，然后把读出来的内容和新的内容拼接到一起；
// fs.readFile("./3.txt","utf8",function(err,result){
//     fs.writeFile("./3.txt",result+"欢迎新同学","utf8",function(){

//     })
// })

// 4.appeddFileSync : 直接文件末尾追加内容
// fs.appendFileSync("./3.txt","不许走神","utf8");
// fs.appendFile


//  copyFileSync : 把文件里面的内容拷贝到新的文件中，并且替换掉原来的内容；覆盖
// copyFileSync(A,B);把A拷贝到b中；
// fs.copyFileSync("./customer.json","./3.txt")


// readdirSync : 同步读取指定的目录，返回一个数组，数组中包含了目录的字符串；
// let address = fs.readdirSync("../../");
// console.log(address);

// readdir:异步读取文件目录，读取完会触发回调函数执行，err,代表错误信息，result代表读取的结果，是一个数组
// 同异步；
fs.readdir("./",function(err,result){
    console.log(result);
});
