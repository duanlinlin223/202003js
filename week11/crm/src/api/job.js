import http from './http'

//请求职务列表
export function getJobList() {
    return http.get('/job/list')
}
export function delJobList(id) {
    return http.get('/job/delete', {
        params: {
            jobId: id
        }
    })
}
//更改职务信息
export function updateJob(option) {
    return http.post("/job/update", option)
}
//新增职务信息
export function addJob(option) {
    return http.post("/job/add", option)
}