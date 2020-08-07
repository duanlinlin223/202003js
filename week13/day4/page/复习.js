/*
JSX语法：{} 渲染数据用map
jsx是React.createElement()的语法糖；会创建一个虚拟的dom对象

ReactDOM.render会把虚拟的dom对象转成真实的dom

组件：function 和class 
function：一般用于渲染静态结构；没有this(undefined)；没有声明周期 没有this
class:有声明周期；有this；有状态；
状态和属性：当状态或者属性发生改变会引发视图的更新
this:class==>指向组件实例  箭头函数

生命周期：初始化组件：defaultProps-》constructor-》componentWllMount->render->componentDidMount
更新数据：
组件销毁：
父传子的时候：

数据传递==>原生的是全局或者闭包

组件化开发：数据传递是通过redux





*/
