//内置模块(核心模块)
//核心模块的特点:当下载安装node时一并下载安装好的
// 1.fs:文件操作系统模块

let fs = require("fs");
// 1. readFileSync : 读取文件,同步读取
// let content = fs.readFileSync("./user.json",'utf8');//加上utf8 得到的数据就不是buffer数据流了，直接是对应的文件内容
// console.log(content);


//2.readFile  异步readFile(path,encoding,函数)

// fs.readFile('./user.json','utf8',function(err,result){
//     //err如果有错误，代表错误信息
//     //result代表读出来的数据
//     console.log(err,result);
    
// })


//3.写：writeFileSync   writeFile
//writeFileSync (path,内容，编码格式)  会覆盖之前的文件内容 
//同步
//fs.writeFileSync('./3.text','我你你你','utf8')

//writeFile
//writeFile(path,内容,encoding,callback);
// let a = fs.readFileSync('./3.text','utf8')
// console.log(a);

// fs.writeFile('./3.text',a+'huanying','utf8',function(){
//     //当成功写完以后会出发该回调函数
    // fs.readFile('./3.text','utf8',function(result){
    //     fs.writeFile("./3.text",result+"2222","utf8",function(){

    //     })
    // })
   
// })
//4.appendFileSync
//appendFileSync  同步的。直接向文件末尾增加内容
//fs.appendFileSync('./3.text','啊啊啊','utf8')
//异步appendFile

// copyFileSync  把文件里的内容拷贝到新的文件中，并且替换掉原来的内容；覆盖,把前面的文件拷贝（替换掉）到后面的文件里

 //fs.copyFileSync('./user.json','./3.text')


 //readdirSync   同步读取文件目录
//同步读取指定的目录，返回一个数组，数组中包含了目录的字符串
//let address = fs.readdirSync('./')

 //readdir()  异步读取文件路径，读取完会出发回调函数执行，err代表错误信息，result代表成功信息

 fs.readdir('./',function(err,result){
    console.log(result)
 })