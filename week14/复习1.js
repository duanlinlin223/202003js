/*
react脚手架  create-react-app 项目名 生成一个项目
jsx语法：...语法规则等等
React.createElement(jsx的语法糖)   ReactDOM.render()
react组件：function-》【一般用于渲染静态的组件】 和class  【class居多-》有this 有状态 有生命周期】
属性 ： 放在组件行间的就是属性
属性的状态发生改变之后都会引发视图的更新

生命周期：constructor  componentWillMount render componentDidMount==更新时----等等

redux：公共数据管理 redux源码 createStore combineReducers两个

store：A组件和B组件同时使用store中的num这个值，当A组件dispatch改了这个num时，B组件不会更新；
react-redux:解决什么问题？--》Provider  connect ：将store的公共数据和actions放到了当前组件的属性上




*/
