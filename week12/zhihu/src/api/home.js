import http from "./http";
export  function hotList(option){
    // 请求知乎的数据
    return  http.get("/v4//mweb-feed/content/list",{
        params:option
    })
}
//默认会导出一个对象
