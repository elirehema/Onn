import Vue from 'vue';
import Vuex from 'vuex';
/**
 * Polify library, For browser which does not support/implement Promise such as I.E**/
import 'es6-promise/auto';
Vue.use(Vuex);
import { productGetters,loginGetters, manufacturerGetters, usersGetter, registrationGetters, messageGetter} from './getters'
import { productMutations, loginMutations, manufacturerMutations, userMutations, registrationMutations, messageMutation } from './mutations'
import { productActions, manufacturerActions,loginActions, userActions, registrationActions,messsageAction } from './actions';

export default new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    state: {
        cart: [],
        showLoader: false,
        isAuthenticated: false,
        authenticationToken: String,
        token: localStorage.getItem('token') || '',
        product: {},
        products: [],
        manufacturers: [],
        users: [],
        user:{},
        profile: {},
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
});
