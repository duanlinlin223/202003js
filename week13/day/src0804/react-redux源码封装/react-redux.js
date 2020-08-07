// Provider 是一个组件
import React from "react";
import PropTypes from "prop-types";
// Provider : 把Provider组件属性上的store放在上下文，以便它里面所有子孙组件都可以获取到这个store;
class Provider extends React.Component {
    constructor() {
        super();
    }
    // 定义上下文的数据类型
    static childContextTypes = {
        store: PropTypes.object,
    };
    // 返回上下文的数据
    getChildContext() {
        return {
            store: this.props.store, // 获取到行间属性store的属性值
        };
    }
    render() {
        // 把Provider这个组件里面嵌套的组件return出来，return 什么页面最终渲染什么；
        return this.props.children;
    }
}
// connect : 是一个高阶的组件
// let  mapStateToProps = (state)=>{ // state: store.getState()
//     return {...state.todo}
// }
// let mapActionsToProps=(dispatch)=>{// dispatch===store.dispatch
//     return {
//         addTodo:()=>{dispatch(actions.addTodo())}
//     }
// }
// export  default connect(mapStateToProps,mapActionsToProps)(todo);
// export  default connect(state=>({...state.todo}),mapActionsToProps)(todo);
// 第二个参数可以是函数，也可以是actions对象；如果是actions对象，需要默认调用redux的bindActionCreators,处理一个用dispatch包装actions之后的对象
// let fn = function () {
//     return function () {
//         return 100;
//     };
// };
// let fn = () => () => {
//     return 100;
// };
// let a = fn()(); // 100

// 把App组件传给了Component这个形参
let connect = (mapStateToProps, mapDispatchToProps) => (Component) => {
    return class A extends React.Component {
        constructor(props, context) {
            super();
            console.log(context);
            // this.context.store.getState() ==> store中state的值
            this.state = mapStateToProps(context.store.dispatch);
        }
        // 所有的组件都在Provider中，利用组件contextTypes接收store;
        static contextTypes = {
            store: PropTypes.object,
        };
        // 每当dispatch时，都会触发视图的更新
        componentDidMount() {
            this.unscribe = this.context.store.subscribe(() => {
                this.setState(mapStateToProps(this.context.store.getState()));
            });
        }
        componentWillUnmount() {
            this.unscribe(); // 取消订阅
        }
        render() {
            //this.setState(mapStateToProps(this.context.store.getState()));
            let h;
            if (typeof mapDispatchToProps === "function") {
                h = mapDispatchToProps(this.context.store.dispatch);
            } else {
                // 如果直接传入actions，那么需要调用bindActionCreators方法
                h = bindActionCreators(
                    mapDispatchToProps,
                    this.context.store.dispatch
                );
            }
            // Component就是App组件；把store中state的数据传递给Component这个组件
            return <Component {...this.state} {...h}></Component>;
        }
    };
};
let bindActionCreators = (action, dispatch) => {
    let obj = {};
    for (let key in action) {
        obj[key] = () => {
            dispatch(action[key]());
        };
    }
    return obj;
};
export { Provider, connect };
