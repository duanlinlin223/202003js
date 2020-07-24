import axios from "axios";
const http = axios.create({
    baseUrl: "",
    transformRequest(data) {
        let str = "";
        for (let key in data) {
            str += `${key}=${data[key]}&`
        }
        return str;
    },
    params: {
        t: Math.random()
    },
    timeout: 2000
});
// 添加请求以及响应拦截器
http.interceptors.response.use(function (response) {
    return response.data;
}, function (error) {
    return Promise.reject(error)
});
export default http;