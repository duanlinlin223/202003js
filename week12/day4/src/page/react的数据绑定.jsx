import React from "react";
import ReactDOM from "react-dom";
//在真实的项目中，经常根据后端返回的数据进行渲染视图；axios fetch 请求数据

let ary = [
    { name: "河北", age: 500, intor: "保定" },
    { name: "北京", age: 500, intor: "中国首都" },
    { name: "天津", age: 300, intor: "直辖市" },
];
//原生js：字符串拼接  innerHTML放页面
//vue：v-for
//react:数组的map；一条数据映射出一个元素；每一个react元素都需要一个key属性

//根据数据渲染出一个列表；
let list = (
    <ul>
        {ary.map((item, index) => {
            //根据return  返回一个react元素
            //key的属性值应该用{}动态取到该项的索引
            //key具有唯一性
            return (
                <li key={index}>
                    {item.name}:{item.age}
                    <ul>
                        <li key={index}>{item.intor}</li>
                    </ul>
                </li>
            );
        })}
    </ul>
);

let arr = [1, 2, 3, 4, 5];
let newArr = arr.map((item) => item + 1); //根据这个回调函数的返回值来映射出一个新的数组来；
console.log(newArr);

ReactDOM.render(list, document.querySelector("#root"));
