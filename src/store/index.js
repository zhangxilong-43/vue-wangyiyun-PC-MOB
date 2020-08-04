import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        musicUrl: null
    },
    mutations: {
        change(state, url) {
            state.musicUrl = url
        },
        remove(state) {
            state.musicUrl = ""
        }
    },
    actions: {},
    modules: {}
})