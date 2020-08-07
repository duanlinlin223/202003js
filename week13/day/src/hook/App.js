import React, { useState, useEffect, useRef, useReducer } from "react";
function reducer(state, action) {
    console.log(state);
    switch (action.type) {
        case "CHANGE_M":
            return { ...state, m: state.m + 1 };
    }
    return state;
}
function Child(props) {
    //函数组件中没有this，可以用参数props来接收一下
    return <div>Child{props.c}</div>;
}
function App() {
    let [{ m, n }, dispatch] = useReducer(reducer, { m: 0, n: 0 });
    return (
        <div>
            m:{m}
            <br></br>
            n:{n}
            <button
                onClick={() => {
                    //更改流程：dispatch-->reducer-->state
                    dispatch({ type: "CHANGE_M" });
                }}
            >
                +M
            </button>
            <button>+N</button>
            <Child c={m}></Child>
        </div>
    );
}

// function App() {
//     //会得到一个对象
//     let spanRef = useRef();
//     let divRef = useRef();
//     console.log(spanRef, divRef);
//     return (
//         <div>
//             {/* 把ref加到哪个元素的属性上，那么就把这个元素赋值给对应的current属性 */}
//             {/* 如果给两个不同的元素ref都加spanRef，那么后面会把前面的覆盖掉 */}
//             <span ref={spanRef}>0</span>
//             <div ref={divRef}>0</div>
//             <button
//                 onClick={() => {
//                     spanRef.current.innerHTML++;
//                     divRef.current.innerHTML++;
//                 }}
//             >
//                 ++
//             </button>
//         </div>
//     );
// }

// function App() {
//     let [state, setState] = useState(function () {
//         return {
//             m: 100,
//             n: 200,
//         };
//     });
//     //class定义组件有状态，有生命周期有this。
//     //在初始化组件时，会默认调用useEffect里面的回调函数；相当于react的componentDidMount；当后期更新数据时，也会执行该回调函数；相当于componentDidUpdate
//     //useEffect传两个参数(参数一是一个回调函数，参数二是依赖谁，);并且可以监听任何想监听的数据(可以多次执行)
//     useEffect(() => {
//         //设置依赖项(设置某一项才运行这个函数，)，没有设置依赖项那么只要state中数据发生变化都会执行
//         console.log("useEffect");
//     }, [state.m]);
//     useEffect(() => {
//         //设置依赖项(设置某一项才运行这个函数，)，没有设置依赖项那么只要state中数据发生变化都会执行
//         console.log("88");
//     }, [state.n]);
//     return (
//         <div>
//             {state.m}
//             {state.n}
//             <button
//                 onClick={() => {
//                     setState({ ...state, n: 150, m: 1 });
//                 }}
//             >
//                 更新
//             </button>
//         </div>
//     );
// }

// function 定义的组件没有状态；
// function App() {
//     // let [num] = useState(66);
//     let [state, setState] = useState(function () {
//         // useState也可以传入一个函数
//         // 函数的返回值就是state状态;
//         // 可以让咱们去处理一些关于state的逻辑；
//         // 该函数初始化state时，会默认调用一次，后面如果更新state,不能让这个函数执行；
//         console.log(333);
//         return { num: 66 };
//     });
//     // useState :传递过去的值就是该组件的状态；
//     // useState 也可以传递一个对象数组
//     // setState: 用来更改state的方法，并且能引发视图的更新；
//     return (
//         <div>
//             {state.num}
//             <button
//                 onClick={() => {
//                     setState({
//                         ...state,
//                         num: 88,
//                     });
//                 }}
//             >
//                 更新
//             </button>
//         </div>
//     );
// }
// function App(){
//     // let [num] = useState(66);
//     let  [state,setState] = useState({
//         num:66
//     })
//     // useState :传递过去的值就是该组件的状态；
//     // useState 也可以传递一个对象数组
//     // setState: 用来更改state的方法，并且能引发视图的更新；
//     return <div>
//         {state.num}
//         <button onClick={()=>{
//             setState({
//                 ...state,
//                 num:88
//             })
//         }}>更新</button>
//     </div>
// }
export default App;
