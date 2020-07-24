import Vue from 'vue'
import Vuex from 'vuex';
import state from "./state.js";
import * as mutations from "./mutations.js";
// mutations={changeDepartmentList:function(){},changeJobList:function(){},changeUserList:function(){}}
import * as actions from "./actions.js"
Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  actions
})
