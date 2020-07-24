import Vue from 'vue'
import Vuex from 'vuex';
import state from './state.js'
//* 把mutations.js中所有导出的东西作为mutations
import * as mutations from './mutations.js'
import * as actions from './actions.js'

Vue.use(Vuex)
//如果请求回来的数据需要放在store中，先在store中写一个数据用来接收请求回来的数据==》更改这个数据的方法，也就是mutations中的方法==>action,导入api接口中的方法，然后把请求回来的数据通过commit提交给mutation，从而让数据发生改变；
export default new Vuex.Store({
  state,
  mutations,
  actions,
})