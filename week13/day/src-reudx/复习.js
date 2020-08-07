// create-react-app  项目名字
// JSX语法
// React.createElement  ReactDOM.render
// react 组件 
// function[一般用于渲染静态的组件]  class[有this 有状态 有生命周期]；
// 属性 ： <Child a="100"></Child>
// 属性和状态发生改变之后，都会引发视图的更新；
// 生命周期 
// redux ： 公共数据管理 redux源码 
function creaStore(reducer){
    // state   getState   dispatch  subscribe 
    let  state;
    let getState=()=>JSON.parse(JSON.stringify(state));
    let listeners=[];
    let dispatch=(action)=>{
        state=reducer(state,action);
        listeners.forEach(item=>{
            typeof item==="function"?item():null;
        })
    };
    dispatch({});
    let subscribe=(fn)=>{
        listeners.push(fn);
        return ()=>{
            listeners=listeners.filter(item=>item!==fn);
        }
    };
    return {
        getState,
        dispatch,
        subscribe
    }
}
let combineReducers=(reducers)=>{
    return (state={},action)=>{
        let obj = {};
        for(let key in reducers){
            obj[key]=reducers[key](state[key],action)
        }
        return obj;
    }
}
// let store = creaStore();
// store.getState(); store.dispatch();
// store : A组件和B组件同时使用store中的num这个值，当A组件改了这个num时，B组件不会更新；用订阅的方式
// react-redux : Provider  connect  :将store的公共数据和actions存放到了当前组件属性上
