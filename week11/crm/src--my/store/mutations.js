export function changeDepartmentList(state, option) {
    state.departmentList = option
}
export function changeJobList(state, option) {
    //console.log(option);
    state.jobList = option
}

export function changeUserList(state, option) {
    state.userList = option.data
}