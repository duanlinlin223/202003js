//创建一个store并且导出store
//store文件夹中
//actions :导出一个对象，对象都是键值对函数，函数返回一个对象，这个对象就是嗲patch的action
//reducer：每个文件对应的更改数据的reducer
//action-types ：存放了常量。是action的type的属性值
//index.js：创建了store导出store

//index.js创建的store并且导出store

// import { createStore } from "../redux.js";
//直接引入第三方模块
import { createStore } from "redux";

//如果解构数据，在到处的地方不需要加default
import reducer from "./reducers1/index";

//createStore只能传一个参数

let store = createStore(reducer);

export default store;
