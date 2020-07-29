import React from "react";
import ReactDOM from "react-dom";

class Bar extends React.Component {
    constructor() {
        super();
    }
    // add() {
    //     //1.在react中，事件放在当前组件的原型上
    //     //2.事件中的this指向undefined；但是希望指向组件实例；
    //     //3.这不是箭头函数,bind是可以更改这个里面的this指向的；
    //     //4.如果事件的方法是箭头函数，那么函数中的this指向组件的实例
    //     //console.log(100);
    //     console.log(this);
    // }

    add = (num1, num2, num3) => {
        //1.在react中，事件放在当前组件的原型上
        //2.事件中的this指向undefined；但是希望指向组件实例；
        //3.如果事件绑定时不加小括号，那么第一个参数默认就是事件对象
        //4.如果需要传参，那么可以在绑定时，在函数的外面包一层箭头函数
        //5.当使用bind时 事件对象是最后一个参数
        //console.log(100);
        //console.log(this);
        console.log(num1);
        console.log(num2);
        console.log(num3);
    };
    render() {
        //this==>组件实例；可以通过this去获取到原型上的方法
        //事件绑定：onClick :事件的首字母大写；驼峰的写法
        return (
            <div>
                {/* 事件绑定时，不能直接加上小括号 */}
                {/* <button
                    onClick={(e) => {
                        this.add(e, 100);
                    }}
                >
                    按钮
                </button> */}
                {/* bind不传参，默认第一个就是事件对象， */}
                {/* bind返回一个新的函数，add不执行，改变了add的this指向 */}
                <button onClick={this.add.bind(1, 2, 3)}>按钮</button>
            </div>
        );
    }
}
ReactDOM.render(<Bar></Bar>, document.querySelector("#root"));
