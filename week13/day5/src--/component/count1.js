import React from "react";
import store from "../store/index1.js";
import actions from "../store/actions/count1.js";
class Count extends React.Component {
    constructor() {
        super();
        //console.log(store.getState().num);
        this.state = { num: store.getState().count.num };
    }
    componentDidMount() {
        store.subscribe(() => {
            this.setState({ num: store.getState().count.num });
        });
    }
    //
    add = (n) => {
        //更改store中的state;dispatch
        //添加action-types--》actions中的count.js --》components的dispatch---》store中reducers中的count.js
        store.dispatch(actions.add(n));
    };

    min = (m) => {
        store.dispatch(actions.min(m));
        //当页面渲染时，dispatch已经默认执行了一次；那么就会默认调用一次reducer，reducer会让所有组件的reducer都执行一次；执行完所有的reducer之后，store的state就有了初始值；从刚开始的undefined变成了{count:{num:66}，todo:['去看书','去约会']}

        // 点击-按钮，触发onClick事件，该min方法会执行；当执行min时，会调用store中的dispatch方法和actions中min方法；先执行actions中min,并且返回一个带有type的对象；把返回的这个对象传给了dispatch的实参，继续找到redux中createStore中dispatch让其执行，该方法执行，会让combineReducers的返回值的那个函数执行，当那个函数执行，又会找到各个组件对应的reducer,让其循环执行，把各个的reducer的返回值赋值给obj;最后把obj覆盖state;由于该组件订阅了更新该组件私有状态的方法，所以dispatch之后也会让该组件的订阅方法执行，从而让视图更新。
    };
    render() {
        return (
            <div>
                <button
                    onClick={() => {
                        this.add(2);
                    }}
                >
                    +
                </button>
                <span>{this.state.num}</span>
                <button onClick={this.min.bind(null, 3)}>-</button>
            </div>
        );
    }
}
export default Count;
