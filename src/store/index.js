import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({

    state: {
        idToken:null,


    },

    getters: {
        idToken(state){
            return state.idToken;
        },

        isAuthenticated (state) {
            return state.idToken !== null
        }
    },
    mutations: {
        change(state, idToken){
            state.idToken = idToken
        },
    },

    actions: {
    },

    modules: {

    }
})
