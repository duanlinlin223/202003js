export function changeHotList(state, option) {
    //option需要看接口文档
    //[] {} {data:[]}
    //option就是请求回来的数据
    //console.log(option);
    state.hotlist = option;
}
//export
