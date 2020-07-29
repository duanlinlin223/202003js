import http from './http.js';

export function deleteJob(jobId) {
    return http.get("/job/delete", {
        params: {
            jobId
        }
    })
}

export function getJobList() {
    return http.get('/job/list')
}

//新增职务信息
export function addJobList(option) {
    return http.post('/job/add', option)
}

export function UpdateJobList(option) {
    return http.post('/job/update', option)
}