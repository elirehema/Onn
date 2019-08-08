import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
import { productGetters, manufacturerGetters } from './getters'
import { productMutations, cartMutations, manufacturerMutations } from './mutations'
import { productActions, manufacturerActions } from './actions'

export default new Vuex.Store({
    strict: true,
    state: {
        cart: [],
        showLoader: false,
        product: {},
        products: [],
        manufacturers: []
    },
    mutations: Object.assign({}, productMutations, cartMutations, manufacturerMutations),
    getters: Object.assign({}, productGetters, manufacturerGetters),
    actions: Object.assign({}, productActions, manufacturerActions)
})
