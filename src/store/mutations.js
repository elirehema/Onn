// import { productSchema } from './schemas'
// import { normalize } from 'normalizr'
// import merge from "lodash/object/merge"
/*jshint esversion: 6 */
/*jshint sub:true*/
import * as mutations from './mutation-types';


export const productMutations = {
    [mutations.ALL_PRODUCTS](state) {
        state.showLoader = true;
        
    },
    [mutations.ALL_PRODUCTS_SUCCESS](state, payload) {
        state.showLoader = false;
        state.products = payload;
    },
    [mutations.PRODUCT_BY_ID](state) {
        state.showLoader = true;
    },
    [mutations.PRODUCT_BY_ID_SUCCESS](state, payload) {
        state.showLoader = false;
        state.product = payload;
    },
    [mutations.ADD_PRODUCT]: (state) => {
        state.showLoader = true;
    },
    [mutations.ADD_PRODUCT_SUCCESS]: (state, payload) => {
        state.showLoader = false;
        state.products.push(payload);
    },
    [mutations.UPDATE_PRODUCT]: (state) => {
        state.showLoader = true;
    },
    [mutations.UPDATE_PRODUCT_SUCCESS]: (state, payload) => {
        state.showLoader = false;
        state.products = state.products.map(p => {
            if (p._id === payload._id) {
                payload = {payload, manufacturer: state.manufacturers.filter(x => x._id === payload.manufacturer)[0]};
                return payload;
            }
            return p;
        });
    },
    [mutations.REMOVE_PRODUCT]: (state) => {
        state.showLoader = true;
    },
    [mutations.REMOVE_PRODUCT_SUCCESS]: (state, payload) => {
        state.showLoader = false;
        const index = state.products.findIndex(p => p._id === payload);
        console.debug('index', index);
        state.products.splice(index, 1);
    }
};

export const cartMutations = {
    [mutations.ADD_TO_CART]: (state, payload) => state.cart.push(payload),
    [mutations.REMOVE_FROM_CART]: (state, payload) => {
        const index = state.cart.findIndex(p => p._id === payload);
        state.cart.splice(index, 1);
        console.log(state.cart, state.cart.length, index);
    }
};

export const manufacturerMutations = {
    [mutations.ALL_MANUFACTURERS](state) {
        state.showLoader = true;
    },
    [mutations.ALL_MANUFACTURERS_SUCCESS](state, payload) {
        state.showLoader = false;
        state.manufacturers = payload;
    }
};

export const userMutations = {
    [mutations.ALL_USERS](state) {
        state.showLoader = true;
    },
    [mutations.ALL_USERS_SUCCESS](state, payload) {
        state.showLoader = false;
        state.users = payload;
    },
    [mutations.ADD_USER]: (state) => {
        state.showLoader = true;
    },
    [mutations.ADD_USER_SUCCESS]: (state, payload) => {
        state.showLoader = false;
        state.users.push(payload);
    },
    [mutations.DELETE_USER]: (state) => {
        state.showLoader = false;
    },
    [mutations.DELETE_USER_SUCCESS]: (state, payload) => {
        state.showLoader = false;
        state.deleted = payload;

    },

};

export const loginMutations = {
    [mutations.LOGIN](state) {
        state.showLoader = true;
    },
    [mutations.LOGIN_SUCCESS](state, token, user) {
        state.showLoader = false;
        state.user = user;
        state.token = token;
        state.isAuthenticated = true;
    },
    [mutations.LOGIN_ERROR](state) {
        state.showLoader = false;
        state.isAuthenticated = false;
    },
    [mutations.LOGOUT](state) {
        state.token = '';
        state.isAuthenticated = false;
    },
    [mutations.USER_PROFILE](state){
        state.showLoader = true;
    },
    [mutations.USER_PROFILE_SUCCESS](state, profile){
        state.showLoader = false;
        state.profile= profile;
    },
    [mutations.USER_PROFILE_FAILURE](state){
        state.showLoader = false;
    },
    [mutations.UPDATE_PROFILE](state){
        state.showLoader = true;
    },
    [mutations.UPDATE_PROFILE_SUCCESS](state, profile){
        state.showLoader = false;
        state.profile = profile;
    },
    [mutations.UPDATE_PROFILE_FAILURE](state){
        state.showLoader = false;
    },
};
export const messageMutation = {
    [mutations.SEND_MESSAGE](state){
        state.showLoader = true;
    },
    [mutations.SEND_MESSAGE_SUCCESS](state, message){
        state.showLoader = false;
        state.message  = message;
    },
    [mutations.SEND_MESSAGE_FAILURE](state){
        state.showLoader = false;
    },
    [mutations.GET_MESSAGE](state){
        state.showLoader = true;
    },
    [mutations.GET_MESSAGE_SUCCESS](state, message){
        state.showLoader = false;
        state.messages  = message;
    },
    [mutations.GET_MESSAGE_FAILURE](state){
        state.showLoader = false;
    },



};

export const registrationMutations = {
    [mutations.REGISTRATION](state) {
        state.showLoader = true;
    },
    [mutations.REGISTRATION_SUCCESS](state, payload) {
        state.showLoader = true;
        state.auth = payload;
    }
};
