import * as Types from "../action-types.js";
export default {
    add(n) {
        //一般在actions中发送请求；把请求回来的数据传递给action，然后去更改reducer
        //请求大多是异步的，
        // setTimeout(() => {
        //     //在这个里面return不行，是setTomeout 的return
        //// return { type: Types.ADD_COUNT, n };
        // }, 2000);
        //action不支持异步，redux-thunk可以解决这个问题,允许action的方法返回一个函数；并且这个函数会传两个参数
        return function (dispatch, getState) {
            //dispatch===store.dispatch getState===store.getState
            //在真实的项目中，会利用redux-thunk,在actions中发送请求；
            setTimeout(() => {
                //这个dispatch更改了store的state
                dispatch({ type: Types.ADD_COUNT, n });
            }, 2000);
        };
    },
    min(n) {
        //会把resolve的结果给payload
        //如果这个payload的属性值是一个promise实例，那么会把promise中resolve的结果或reject的结果传递给payload，然后传递给reducer
        //如果promise没有.then 相当于直接把resolve或者reject的实参赋值给payload，如果有则会等到then的回调函数返回值给了payload
        // return {
        //     type: Types.MIN_COUNT,
        //     payload: new Promise(function (resolve, reject) {
        //         setTimeout(() => {
        //             resolve(10);
        //         }, 1000);
        //     }).then(function (val) {
        //         return val + 1;
        //     }),
        // };

        //还可以直接return一个promise实例
        return new Promise(function (resolve, reject) {
            setTimeout(() => {
                //resolve传递的对象就是dispatch传递的对象
                resolve({ type: Types.MIN_COUNT, n });
            }, 2000);
        });
    },
};
