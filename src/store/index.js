import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        musicUrl: null,
    },
    mutations: {
        changemusicUrl(state, url) {
            state.musicUrl = url
        },
        removemusicUrl(state) {
            state.musicUrl = null
        },
    },
    actions: {},
    modules: {}
})