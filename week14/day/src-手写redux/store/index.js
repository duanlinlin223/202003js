import { createStore } from "redux";
//store文件夹中：
//actions:导出一个对象，对象都是键值对函数，函数返回一个对象，，这个对象就是dispatch的action

//reducers：没惹组件对应的更改数据的reducer
//action-types:导出了常量是 action的type的属性值
//index.js：创建了store 导出了store
import reducer from "./reducers/index.js";
let store = createStore(reducer);
export default store;
