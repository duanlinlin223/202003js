let  promiseFs = require("./封装promise的fs");

promiseFs.readFile('./3.text').then(function(data){
    // data就是咱们读取出来的数据；
    console.log(data);
})