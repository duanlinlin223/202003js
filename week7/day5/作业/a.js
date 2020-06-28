function sum (){
    let res=0;
    for(var i = 0;i<arguments.length;++i){
        res+= arguments[i]
    }
    return res;
}

//数组的方法  array.join()
//console.log(NumSum)
//console.log(sum (1,2,3,4,5))
module.exports={
    sum
}

//exports 导出；是该模块的出口，打印出来为一个空对象{};
//exports.sum=sum;   等价上面的写法
//esports.c=100 ;   输出c=100;

//__dirname 代表当前文件的父级文件的绝对路径
//__filename:是当前文件的绝对路径
