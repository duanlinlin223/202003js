/*
react-redux 源码：Provider组件   connect高阶函数
props redux 
：context
父组件中定义两个  childContextTypes={}   getChildContext(){}
子组件中定义一个 ：contextTypes={}

Provider组件：套在所有组件的外面，在Provider中要渲染他的所有的子孙元素(this.props.children)，并且把store放到属性上，作为所有子孙组件的上下文 ，把store作为行间属性放到了上下文中。方便所有的子孙组件能够获取到store

connect :高阶函数
mapStateToProps:返回一个当前组件对应的state
mapActionsToProps:返回一个用dispatch包装之后action的对象
let connext =(mapStateToProps,mapActionsToProps)=>(Component)=>{
    return class A extends React.Component{
        render(){
            return <Component></Component>
        }
    }
}

react的hooks
hook是react16版本以后新增的




*/
