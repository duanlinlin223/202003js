// 生命周期： 在渲染整个组件整个过程中，会默认调用写一些函数执行，那么这些这些函数就是生命周期的钩子函数
import React from "react";
import ReactDOM from "react-dom";
class Parent extends React.Component {
    static defaultProps = {
        name: "zfpx",
    };
    constructor(props) {
        super(props);
        //1.一般情况下初始化state 2. 也可以获取到外界传递进来的属性
        console.log("constructor");
        // console.log(this.props)
        this.state = { num: 100 };
    }
    componentWillMount() {
        // 组件挂载之前，会执行这个钩子函数，可以在这个函数中修改状态。当执行render时，state已经是最新的了，不需要再次调用render了；
        console.log("componentWillMount");
        // this.setState({num:200})
    }
    componentDidMount() {
        // 组件挂载之后，会执行这个钩子函数，
        console.log("componentDidMount");
    }
    //
    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate");
        console.log(nextProps, nextState);
        // nextProps: 下一次的属性
        // nextState: 下一次的状态
        // 返回一个布尔值
        // 会根据这个钩子函数返回true或false，来决定是否继续向下执行；
        // true 就继续向下更新执行，false，就不再向下执行更新视图了；在更新数据之前加了一层拦截；经常用于性能优化；

        // 在项目经常根据下一次的属性或状态来判断是否要刷新视图，如果需要则返回true，不需要返回false
        // if(nextState.num%2===0){
        //     return true;
        // }else{
        //     return false;
        // }
        return true;
    }
    componentWillUpdate() {
        // 当组件的状态或属性发生改变时，会引发视图的更新，同时也会调用更新的钩子函数；在render之前
        console.log("componentWillUpdate");
    }
    componentDidUpdate() {
        // 在render之后；
        console.log("componentDidUpdate");
    }
    componentWillUnmount() {
        // 组件卸载;组件卸载完成之后，那么组件也会跟着消失；
        console.log("componentWillUnmount");
    }
    add = () => {
        this.setState({ num: this.state.num + 1 });
        // ReactDOM.unmountComponentAtNode : 卸载根元素root的组件
        // ReactDOM.unmountComponentAtNode(document.querySelector("#root"));
    };
    render() {
        // render函数只要state或属性更新，都会执行该钩子函数
        console.log("render");
        return (
            <div>
                {this.state.num}
                <button onClick={this.add}>新增</button>
                <Child a={this.state.num}></Child>
            </div>
        );
    }
}
// 在react中 constructor和render其实生命周期钩子函数的中一个；
// react让咱们在生成实例的过程中，能够添加一些自己的逻辑代码；
// 第一次打开页面默认调用下面这四个钩子函数
// defaultProps==> constructor===componentWillMount====> render ==>componentDidMount

// 当更新state数据时，
// shouldComponentUpdate==> componentWillUpdate===> render===> componentDidUpdate

// 当卸载的时候
// componentWillUnmount
// 当父组件执行render时，执行了子组件的生命周期钩子函数；子组件的初始化的生命周期都是在父组件componentDidMount之前执行的；
class Child extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 1,
        };
        console.log("chilren construcor");
    }
    // 子组件的挂载
    componentWillMount() {
        console.log("child componentWillMount");
    }
    componentDidMount() {
        console.log("child componentDidMount");
    }
    // 子组件的更新;当父组件更新数据后，虽然子组件没有调用父组件的数据，但是子组件的update更新生命周期钩子函数也一样会运行；
    // 当子组件更新自己的state时，不会触发父组件的更新；
    componentWillReceiveProps() {
        // 第一次解析该函数是不会运行的，当后期改变传递的属性时，该函数才会执行；
        console.log("child componentWillReceiveProps");
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextProps); // 下一次的属性
        console.log("child shouldComponentUpdate");
        return true;
    }
    componentWillUpdate() {
        console.log("child  componentWillUpdate");
    }
    componentDidUpdate() {
        console.log("child  componentWillUpdate");
    }
    add = () => {
        this.setState({ count: this.state.count + 1 });
    };
    render() {
        console.log("chilren render");
        return (
            <div>
                <p>{this.props.a}</p>
                <p>{this.state.count}</p>
                <button onClick={this.add}>子组件点一点</button>
            </div>
        );
    }
}
ReactDOM.render(<Parent msg="zfpx"></Parent>, document.querySelector("#root"));
