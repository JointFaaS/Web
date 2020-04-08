import Vue from 'vue'
import Vuex from 'vuex'
import { functionGET, functionidDELETE } from '@/api'

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
    },
    deleteFunction (state, id) {
      state.functionList = state.functionList.filter((value: {functionName: string}) => value.functionName !== id)
    }
  },
  actions: {
    async getFunctions ({ commit }) {
      const res = await functionGET()
      commit('updateFunctions', res.functions)
    },
    async deleteFunction ({ commit }, id) {
      await functionidDELETE({
        id: id
      })
      commit('deleteFunction', id)
      // TODO: exception
    }
  },
  modules: {
  },
  strict: process.env.NODE_ENV !== 'production'
})
