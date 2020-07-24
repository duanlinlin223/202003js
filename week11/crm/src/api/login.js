// 在login 所有的请求都放到这个js中；
import http from "./http";// 后缀名是.js，所以可以省略
export  function login(option){
    return http.post("/user/login",option).then(data=>{
        // 响应拦截器已经把所有的data.data进行了处理
        return data;// 这个data就是请求回来的数据
    })
}

