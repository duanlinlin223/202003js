import http from './http.js';

//获取全部客户列表
export function allCustomer(option) {
    return http.get('/customer/list', {
        params: option
    })
}