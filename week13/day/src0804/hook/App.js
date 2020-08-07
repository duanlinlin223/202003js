import React, { useState } from "react";

// hook: 钩子函数；
//class组件有状态 有生命周期 有this
//class定义类相对于function肯定是消耗性能的；而且执行起来比较复杂
function App() {
    // let [a, changeA] = useState(0);
    // // 这个是定义状态的hook;
    // let [state, changeObj] = useState({ num: 100 });
    //useState(0)返回一个数组
    //useState()：第一个参数是创建的state的初始值，第二个参数是个函数，这个函数是用来更改state的
    //更改state方法执行时，传进去的实参就会覆盖原来的state
    //console.log(useState(0));
    // return (
    //     <div>
    //         {a}
    //         <button
    //             onClick={() => {
    //                 changeA(a + 1);
    //             }}
    //         >
    //             ++
    //         </button>
    //         {state.num}
    //         <button
    //             onClick={() => {
    //                 changeObj({ ...state, num: state.num + 2 });
    //             }}
    //         >
    //             ++
    //         </button>{" "}
    //     </div>
    // );
    let [state, setState] = useState(function () {
        return { m: 0, n: 0 };
    });
    return (
        <div>
            {state.m}
            {state.n}
            <button
                onClick={() => {
                    setState({ ...state, n: 200, m: 300 });
                }}
            >
                click
            </button>
        </div>
    );
}
// class App extends React.Component {
//     constructor() {
//         super();
//         console.log("100");
//     }
//     render() {
//         return <div>123456</div>;
//     }
// }
export default App;
