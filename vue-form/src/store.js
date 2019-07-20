import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: '',
    lists: []
  },
  mutations: {
    addName: function(state,value){
      state.name = value;
    },
    addItem: function (state, value) {
      state.lists.push(value)
    }
  },
  actions: {

  }
})
