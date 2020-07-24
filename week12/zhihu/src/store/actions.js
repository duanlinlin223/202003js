// action : action中的第一个价值是commit==> mutation;action用来提交mutation中的方法；需要在actions中发送请求；actions中支持异步；
// 这里面的方法都要通过dispatch去执行；
// 在action中导入api的接口
import {
    hotList
} from "@/api/home.js";
// import * as  fns from "@/api/home.js";
// option 是dispatch派发的动作，是可以传参的；

export function getHotList({
    commit
}, option) {
    // 在actions中发送请求
    // 所有actions中的方法第一个参数传递进来的实参是$store的实例
    // 所有的mutations中的方法的第一个参数传递进来的都是state;
    hotList(option).then(data => {
        // data也是请求回来的数据
        // 会等到hotList这个方法请求数据成功以后,会执行这个then中的函数；
        // 这个第二个参数就会传给mutation方法的第二个参数；
        // {data:[]}
        console.log(data);
        commit("changeHotList", {
            newType: option.newType,
            oldType: option.oldType,
            data: data.data
        })
    })
}