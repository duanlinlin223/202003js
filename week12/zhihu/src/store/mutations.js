export function changeHotList(state, option) {

    // option需要看接口文档；
    // [] {}  {data:[]}
    // console.log(option);// 请求回来的数据
    //如果这一次请求的type和上一次一样，那么需要把数据push到state最后
    if (option.newType === option.oldType) {
        state.hotlist.push(...option.data)
    } else {
        state.hotlist = option.data;
    }

}
// export  {}