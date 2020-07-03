// var utils = (function () {
//     function toArray(likeAry) {
//         var a = [];
//         try {
//             a = Array.prototype.slice.call(likeAry);
//         } catch (e) {
//             for (var i = 0; i < likeAry.length; i++) {
//                 a[i] = likeAry[i];
//             }
//         }
//         return a;
//     }
//     function toJSON(str) {
//         try {
//             var str= JSON.parse(str);
//             return str;
//         } catch (e) {
//             var str= eval("("+str+")");
//             return str;
//         }
//         // return "JSON" in window ? JSON.parse(str) : eval("(" + str + ")")
//     }

//     return {
//         toArray: toArray,
//         toJSON: toJSON
//     }
// }
// )()

// 在真实项目中，经常会把一些公共的方法，放到一个公共的js里面；
var  utils = (function(){
    function toArray(likeAry){
        // 在IE8是报错的；
        var a =[];
        try{
            a = Array.prototype.slice.call(likeAry)
        }catch(e){
            for(var i=0;i<likeAry.length;i++){
                a[i]=likeAry[i];
            }
        }
        return a;
    } 

    function toJSON(b){
        try{
           
           return JSON.parse(b);
        }catch(e){
           
           return eval("("+b+")");
        }
        
    } 
    // return出一个对象给了utils这个变量
    // 如果属性名和属性值重复，可以省略一个
    return {
        toArray,
        toJSON
    }
})();