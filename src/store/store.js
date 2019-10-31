import Vue from 'vue'
import Vuex from 'vuex'
import chuck from './modules/chuck'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    debug: true,
    number: null,
    add: null,
  },

  modules: {
    chuck,
  },

  actions: {
    SET_NUMBER: function({ commit }, num) {
      commit('setNumber', num)
    },
    SET_ADD: function({ commit }, num) {
      commit('setAdd', num)
    },
  },

  getters: {
    number: (state) => {
      return parseInt(state.number) || 0
    },
    add: (state) => {
      return parseInt(state.add) || 0
    },
  },

  mutations: {
    setNumber: (state, num) => {
      state.number = parseInt(num) || 0
    },
    setAdd: (state, num) => {
      state.add = parseInt(num) || 0
    },
  },

})

export default store
