// react基础篇：JSX语法  组件  生命周期  createElement  Render  属性和状态

// 组件化开发思想；

// redux  : redux文件拆分； action-types index.js   actions   reducers

// createStore   combineReducers   bindActionCreators

function createStore(reducer) {
    // state  getState  dispatch  subscribe
}
// 实现多个reducer共用一个state;
function combineReducers() {}

// react-redux  Provider  connect
// Provider : 把store传给了Provider属性，Provider组件里面所有子孙组件可以通过上下文获取到store数据

// connect : 高阶组件
let connect = (mapStateToProps, mapActionsToProps) => (Component) => {
    return class A extends React.Component {
        // 把mapStateToProps和mapActionsToProps这两个方法的返回值作为属性传给了Component组件
    };
};

// 中间件： redux-logger  redux-thunk    redux-promise;
// react路由 ： react-router-dom 实现路由跳转；HashRouter  Route来配置路由
// Route  path  component;
// Link : 跳转
