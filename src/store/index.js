import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
import { productGetters,loginGetters, manufacturerGetters, usersGetter, registrationGetters, messageGetter} from './getters'
import { productMutations, loginMutations, manufacturerMutations, userMutations, registrationMutations, messageMutation } from './mutations'
import { productActions, manufacturerActions,loginActions,
         userActions, registrationActions,messsageAction } from './actions'

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
        deleted: {},
        messages: [],
        message:{}
    },
    mutations: Object.assign({},
        productMutations, loginMutations, manufacturerMutations, userMutations,
        registrationMutations,messageMutation),
    getters: Object.assign({},
        productGetters,loginGetters, manufacturerGetters,usersGetter, registrationGetters, messageGetter),
    actions: Object.assign({},
        productActions, manufacturerActions,loginActions,userActions, registrationActions,messsageAction
        )
})
