import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
import { productGetters,loginGetters, manufacturerGetters } from './getters'
import { productMutations, loginMutations, manufacturerMutations } from './mutations'
import { productActions, manufacturerActions,loginActions } from './actions'

export default new Vuex.Store({
    strict: true,
    state: {
        cart: [],
        showLoader: false,
        product: {},
        products: [],
        manufacturers: [],
        userinfos: {}
    },
    mutations: Object.assign({}, productMutations, loginMutations, manufacturerMutations),
    getters: Object.assign({}, productGetters,loginGetters, manufacturerGetters),
    actions: Object.assign({}, productActions, manufacturerActions,loginActions)
})
