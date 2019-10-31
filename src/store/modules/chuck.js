import { ChuckClient } from '../client'

const chuck = {
  namespaced: true,
  state: {
    loadStatus: {
      status: 'COMPLETE',
      detail: '',
    },
    categories: [],
    chuck: '',
    fact: '',
  },
  getters: {
    categories: state => {
      return state.categories
    },
    chuck: state => {
      return state.chuck
    },
    fact: state => {
      return state.fact
    },
    loadStatus: state => {
      return state.loadStatus
    },
  },
  actions: {
    GET_CATEGORIES: async function({ commit }) {
      commit('changeLoadStatus', { status: 'LOADING', detail: 'Loading Chuck Categories' })
      ChuckClient.request({
        method: 'get',
        url: 'jokes/categories'
      })
        .then((result) => {
          commit('changeLoadStatus', { status: 'COMPLETE', detail: '' })
          commit('setCategories', result.data)
        })
        .catch((err) => {
          commit('changeLoadStatus', { status: 'ERROR', detail: err })
        })
    },
    CHOOSE: async function({commit}, cat ) {
      commit('changeLoadStatus', { status: 'LOADING', detail: 'Loading Chuck Fact' })
      ChuckClient.request({
        method: 'get',
        url: `jokes/random?category=${ cat }`
      })
        .then((result) => {
          commit('changeLoadStatus', { status: 'COMPLETE', detail: '' })
          commit('chooseChuck', result.data)
        })
        .catch((err) => {
          commit('changeLoadStatus', { status: 'ERROR', detail: err })
        })

      //commit('setFact', data.data)
    },
  },
  mutations: {
    changeLoadStatus: function(state, data) {
      state.loadStatus = data
    },
    setCategories: function(state, data){
      state.categories = data
    },
    setFact: function(state, data){
      state.fact = data
    },
    chooseChuck: function(state, data) {
      state.chuck = data.categories[0]
      state.fact = data.value
    },
  },
}

export default chuck
