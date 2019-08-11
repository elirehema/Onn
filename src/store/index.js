import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
import { productGetters,loginGetters, manufacturerGetters, usersGetter, registrationGetters} from './getters'
import { productMutations, loginMutations, manufacturerMutations, userMutations, registrationMutations } from './mutations'
import { productActions, manufacturerActions,loginActions,
         userActions, registrationActions } from './actions'

export default new Vuex.Store({
    strict: true,
    state: {
        cart: [],
        showLoader: false,
        token: localStorage.getItem('token') || '',
        product: {},
        products: [],
        manufacturers: [],
        users: [],
        user:{},
        auths: {},
        deleted: {}
    },
    mutations: Object.assign({},
        productMutations, loginMutations, manufacturerMutations, userMutations,
        registrationMutations),
    getters: Object.assign({},
        productGetters,loginGetters, manufacturerGetters,usersGetter, registrationGetters),
    actions: Object.assign({},
        productActions, manufacturerActions,loginActions,userActions, registrationActions
        )
})
