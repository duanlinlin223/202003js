// 封装promise版的fs系统模块；
let fs = require("fs");
let  path = require("path");
// console.log(path.resolve("./3.txt"))
let  obj = {};
// 根据文件的后缀名返回编码格式  utf8 / null;
// 利用正则来处理后缀名是图片的encoding
function suffixName(pathname){
    let suffixReg = /\.([0-9a-zA-Z]+)$/;
    let suffix = suffixReg.test(pathname)?suffixReg.exec(pathname)[1]:"";
    let encoding = "utf8";
    let picReg = /^(png|gif|jpg|webp|icon|svg|mp3|mp4)$/;
    // 如果后追命是图片的，那么encoding 赋值为null;图片不需要加utf;
    picReg.test(suffix)?encoding=null:null;
    return encoding;
}

["readFile","readdir","mkdir","rmdir"].forEach(item=>{
    obj[item]=function(pathname){
        /// 应该返回一个promise的实例
        pathname = path.resolve(pathname);
        return  new Promise((resolve,reject)=>{
            // 校验路径的后缀名是否是图片；
            let  encoding = suffixName(pathname);
            let callBack =function(err,result){
                if(err!==null){
                    reject(err);
                    return;
                }
                resolve(result);
            }
            if(item!=="readFile"){
                encoding=callBack;
                callBack=null;
            }
            // 如果文件是个图片，音视频等格式，不需要加utf8;
            fs[item](pathname,encoding,callBack);
        })
    }
});
["writeFile","appendFile"].forEach(item=>{
    obj[item]=function(pathname,content){
        // 如果content传过去{},需要对将对象转成JSON格式的字符串；
        pathname = path.resolve(pathname);
        typeof content==="object"&&content!==null?content = JSON.stringify(content):null;
        return new Promise((resolve,reject)=>{
            let encoding = suffixName(pathname);
            let callBack = function(err,result){
                if(err!==null){
                    reject(err);
                    return;
                }
                resolve(result);
            }
            fs[item](pathname,content,encoding,callBack)
        })
    }
});
obj["copyFile"] = function(pathname1,pathname2){
    pathname1=path.resolve(pathname1);
    pathname2 = path.resolve(pathname2);
    return new Promise((resolve,reject)=>{
        fs["copyFile"](pathname1,pathname2,err=>{
            if(err!==null){
                reject(err);
                return;
            }
            resolve();
        })
    })
}
module.exports = obj;