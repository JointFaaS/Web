import Vue from 'vue'
import Vuex from 'vuex'
import { functionGET } from '@/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    functionList: [],
    page: 1,
    pageSize: 8
  },
  mutations: {
    updateFunctions (
      state,
      functionList) {
      state.functionList = functionList
    },
    storePage (
      state,
      payload) {
      state.page = payload.page
      state.pageSize = payload.pageSize
    }
  },
  actions: {
    async getFunctions ({ commit }) {
      const res = await functionGET()
      commit('updateFunctions', res.functions)
    }
  },
  modules: {
  },
  strict: process.env.NODE_ENV !== 'production'
})
