import React from "react";
//import store from "../store/index";
import actions from "../store/actions/counter.js";

//导入connect
import { connect } from "react-redux";
//connect：react-redux要求返回一个连接后的组件

//react-redux：将公共的数据放到了组件的属性上
class Counter extends React.Component {
    // constructor() {
    //     super();
    //     this.state = { num: store.getState().counter.num };
    // }
    // componentDidMount() {
    //     store.subscribe(() => {
    //         this.setState({ num: store.getState().counter.num });
    //     });
    // }
    add = () => {
        //store的dispatch这个方法是用来更改store中的公共数据的；但是不能让该视图也更新；把公共数据放到自己的私有的状态上，并且在componentDidMount函数中订阅一个方法，方法中setState重新设置当前的私有状态；每当dispatch执行一次，就会放订阅的方法执行，订阅的方法执行就会调用setState，调用了setState就会让本组件视图更新

        //store.dispatch(actions.add());
        //react-redux将dispatch作为属性也传递给了当前组件的属性
        //这个属性上的add方法并不直接是actions中的add方法，而是包装了之后的add方法
        this.props.add();
    };
    render() {
        console.log(this.props);
        return (
            <div>
                <button onClick={this.add}>+</button>
                {this.props.num}
                <button>-</button>
            </div>
        );
    }
}
let mapStateToProps = (state) => {
    //state就是store中的state，就是那个公共数据
    return { ...state.counter };
};
//第二个参数actions传进来以后，属性上dispatch没有了，但是多了一个add

//connect 方法实际上两个参数都是函数
//传这个函数也可以，这个函数等价于actions
let mapActionsToProps = (dispatch) => {
    //这个形参dispatch等价于store.dispatch
    //在connect执行时，会把store.dispatch这个方法传给这个函数的dispatch
    return {
        //这个对象最后会放到组件的属性上
        add: () => {
            dispatch(actions.add());
        },
    };
};
//mapActionsToProps:当connect执行时，mapActionsToProps也会执行，并且把这个函数的执行结果当做属性给了当前counter组件
export default connect(mapStateToProps, actions)(Counter);
//connect执行时：正常情况下第二个参数是函数，也可以传对象，当传入函数时，会把函数的执行结果返回的对象直接放到当前组件的属性上，传入actions这个对象时，会默认调用一个bindActionsCreator这个方法，江这个方法的返回值放到组件的行间属性上
//action这个action就是connect的第二个参数   dispatch：store.dispatch
// let bindActionsCreator = (action, dispatch) => {
//     let obj = {};
//     for (let k in action) {
//         obj[key] = () => {
//             dispatch(action[key]());
//         };
//     }
//     return obj; //return 的obj最后放到了组件的属性上
// };
