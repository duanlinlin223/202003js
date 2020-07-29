import React from "react";
import ReactDOM from "react-dom";

//先导入属性校验模块
//create-react-app 生成项目自动会安装这个校验模块
import PropTypes from "prop-types";
class Student extends React.Component {
    static propTypes = {
        //校验的属性对象；
        //a这个属性名就是行间传递过来的属性，属性值是该数据可以使用的数据类型
        a: PropTypes.number,
        name: PropTypes.string,
        //PropTypes.bool
        //PropTypes.func
        //PropTypes.object
        //PropTypes.array
        //PropTypes检测以上数据类型
    };
    static defaultProps = {
        //初始化一个属性的默认值
        //当没有这个age属性时，会执行这个默认值；如果有这个属性，那么默认值就会被覆盖
        //age: 100,
    };
    //在执行constructor之前，defaultProps已经被解析过了；说明defaultProps比constructor执行要早
    constructor(props) {
        super();
        console.log(props);
    }
    render() {
        //传递过来的属性，是只读的，不可以直接修改
        // this.props.a = 108;--->报错
        this.props.o.str = "www北京很凉快因为下雨了"; //这样修改是可以；不可以直接更改最外层的空间地址,里层的空间地址可以更改
        this.props.o.ary = [4, 5, 6];
        return (
            <div>
                {this.props.a}
                {this.props.age}
                {this.props.o.str}
                {this.props.o.ary}
            </div>
        );
    }
}
let obj = {
    num: 1,
    str: { ww: "北京很凉快" },
    ary: [1, 2, 3],
};
ReactDOM.render(
    <Student a={10} name="202003" o={obj}></Student>,
    document.querySelector("#root")
);
