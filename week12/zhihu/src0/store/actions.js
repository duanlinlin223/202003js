//action:action中的第一个价值commit==>mutation；action是专门用来提交mutation中的方法的；需要在action中发送请求；action中支持异步
//去执行这里面的方法都要通过dispatch

//在action中导入api的接口
import {
    hotList
} from "@/api/home.js";
//option 是dispatch派发的动作，是可以传参的；
export function getHotList({
    commit
}, option) {
    //所有actions中的方法第一个参数传递进来的实参是$store实例
    //所有mutations中的方法第一个参数传递进来的都是state
    //在action中发送请求;这里的option是 hotList的参数
    hotList(option).then((data) => {
        //data也是请求回来的数据
        //这个函数会等到hotList这个方法请求数据成功以后才执行这个then中的函数；

        //这个第二个参数就会传给mutation方法的第二个参数；
        //后台返回的数据为{data:[]},所以需要data.data
        console.log(data);
        commit("changeHotList", data.data);
    });
}