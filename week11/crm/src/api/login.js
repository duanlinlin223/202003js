//在login中所有的请求都放在这个文件中
import http from './http' //后缀名是.js所以可以省略
export function login(option) {
    return http.post('/user/login', option).then(data => {
        return data; //这个data就是请求回来的数据
    })
}