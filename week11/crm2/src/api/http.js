//二次封装axios的js
import axios from "axios";

const http = axios.create({
    baseURL: "",
    transformRequest(data) {
        //data就是post请求传递的参数
        let str = "";
        for (let key in data) {
            str += `${key}=${data[key]}&`;
        }
        return str;
    },
    params: {
        t: Math.random(),
    },
    timeout: 2000, //超时时间
});

//请求拦截器
http.interceptors.request.use(
    function(config) {
        return config;
    },
    function(error) {
        return Promise.reject(error);
    }
);
//响应拦截器
http.interceptors.response.use(
    function(response) {
        return response.data;
    },
    function(error) {
        return Promise.reject(error);
    }
);
export default http;
