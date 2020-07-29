import React from "react";
import ReactDOM from "react-dom";

//在react中，想要更新视图：state和 属性
//react 中只有状态或者属性发生该变以后，才会执行视图的更新；
//组件的数据来源：props 和state；
//props:属性是从组件外面传递进来的
//state:是组件私有的；
class Bar extends React.Component {
    constructor() {
        super();
        this.state = {
            num: 100,
            str: "珠峰培训",
        }; //初始化该组件的状态
    }
    add = (m) => {
        console.log(m);
        //从行间拿过来的属性是只读的；
        //this.props.a += 1;
        //this.setState();
        //私有的状态是可以更改的，但是视图并没有更新；在react中，如果想更新视图，只需要再次调用一下render方法，通过调用组件实例的setState方法，当setState执行时，会让render重新执行，render重新执行以后视图就会更新
        // this.state.num++;
        //在react中想更新数据，需要调用setState这个方法，从而能够实现更新视图

        //当想多次更改状态时，更改状态会发生合并，后面一次会把前面的覆盖掉
        //setState：在这个事件中是异步的；
        //+=1：直接在state.num上进行累加  +1 ：state.num是一个表达式，但是state.num值是不变的
        // this.setState({ num: this.state.num + 1 });
        // this.setState({ num: this.state.num + 2 });
        //setState还可以直接穿一个函数
        this.setState((prevState) => {
            //prevState==>代表上一次的状态
            return { num: prevState.num + 1 };
        });

        this.setState((prevState) => {
            //prevState==>代表上一次的状态；为了防止更新状态时，发生合并，这个时候就需要用函数的写法
            //当前函数的状态依赖了上一次的状态
            //这个函数的返回值最后也会覆盖组件的state;
            return { num: prevState.num + m };
        });
    };
    render() {
        //console.log("render");
        return (
            <div>
                <p>
                    {this.state.num}
                    {this.state.str}
                </p>
                {/* bind也可以传参，但是需要null站位 */}
                <button onClick={this.add.bind(null, 6)}>按钮</button>
            </div>
        );
    }
}

ReactDOM.render(<Bar a={88}></Bar>, document.querySelector("#root"));
