
//模块的后缀名.js可以省略

function average(){
    let b = require('./a.js');
    let argu = Array.prototype.slice.call(arguments);
    let res= b.sum(argu);
    let bSum=0;
    let averNum=0;
    //console.log(res)
    argu.sort((a,b)=>{
        return a - b;
      });

      argu.shift();
      argu.pop();
    //   console.log(argu)
    for(var i = 0;i<argu.length;i++){
        bSum += argu[i]
    }
    averNum = bSum/argu.length;
    // console.log(averNum);
    return averNum;

}


module.exports={
    average
}
