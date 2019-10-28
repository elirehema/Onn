import axios from '../config/axios-config';

import {
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    PRODUCT_BY_ID,
    PRODUCT_BY_ID_SUCCESS,
    UPDATE_PRODUCT,
    UPDATE_PRODUCT_SUCCESS,
    DELETE_PRODUCT,
    DELETE_PRODUCT_SUCCESS,
    ALL_PRODUCTS,
    ALL_PRODUCTS_SUCCESS,
    ALL_MANUFACTURERS,
    ALL_MANUFACTURERS_SUCCESS,
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    LOGOUT,
    ALL_USERS,
    ALL_USERS_SUCCESS,
    ADD_USER,
    ADD_USER_SUCCESS,
    REGISTRATION,
    REGISTRATION_SUCCESS,
    DELETE_USER,
    DELETE_USER_SUCCESS,
    SEND_MESSAGE,
    SEND_MESSAGE_SUCCESS,
    GET_MESSAGE,
    GET_MESSAGE_SUCCESS,
    GET_MESSAGE_FAILURE, SEND_MESSAGE_FAILURE, LOGOUT_FAILED, USER_PROFILE, USER_PROFILE_SUCCESS, USER_PROFILE_FAILURE, UPDATE_PROFILE, UPDATE_PROFILE_SUCCESS, UPDATE_PROFILE_FAILURE
} from './mutation-types'

export const productActions = {
    allProducts({commit}) {
        commit(ALL_PRODUCTS);
        axios.get(`/products`).then(response => {
            commit(ALL_PRODUCTS_SUCCESS, response.data.data);
        });
    },
    productById({commit}, payload) {
        commit(PRODUCT_BY_ID);
        axios.get(`/products/${payload}`).then(response =>
            commit(PRODUCT_BY_ID_SUCCESS, response.data))
    },
    addProduct({commit}, payload) {
        commit(ADD_PRODUCT);
        axios.post(`/products`, payload).then(response => {
            commit(ADD_PRODUCT_SUCCESS, response.data)
        });
    },
    updateProduct({commit}, payload) {
        commit(UPDATE_PRODUCT);
        axios.put(`/products/${payload._id}`, payload).then(response => {
            commit(UPDATE_PRODUCT_SUCCESS, response.data)
        });
    },
    deleteProduct({commit}, payload) {
        commit(DELETE_PRODUCT);
        axios.delete(`/products/${payload}`, payload).then(response => {
            commit(DELETE_PRODUCT_SUCCESS, response.data)
        });
    }
};

export const manufacturerActions = {
    allManufacturers({commit}) {
        commit(ALL_MANUFACTURERS);
        axios.get(`/manufacturers`).then(response => {
            commit(ALL_MANUFACTURERS_SUCCESS, response.data)
        });
    }
};
export const userActions = {
    allUsers({commit}) {
        commit(ALL_USERS);
        axios.get(`/users`).then(response => {

            commit(ALL_USERS_SUCCESS, response.data.data)
        });
    },

    deleteUser({commit}, payload) {
        commit(DELETE_USER);
        axios.delete(`/users/${payload}`).then(response => {
            commit(DELETE_USER_SUCCESS, response.data);
        });
    },
    currentProfile({commit}, payload){
        commit(USER_PROFILE);
        axios.get(`/users/${payload}`)
        .then(response => {
            commit(USER_PROFILE_SUCCESS, response.data.data);
        })
        .catch(function (error) {
            commit(USER_PROFILE_FAILURE);
            console.log(error.message);
          });
    },
    updateprofile({commit}, payload){
        commit(UPDATE_PROFILE);
        axios.put(`/users/${payload.id}`)
        .then(response => {
            commit(UPDATE_PROFILE_SUCCESS, response.data.data);
        })
        .catch(err => {
            commit(UPDATE_PROFILE_FAILURE, err);
            console.log(err.message);
        });
    },
    addUser({commit}, payload) {
        commit(ADD_USER);
        axios.post(`/users`, payload).then(response => {
            commit(ADD_USER_SUCCESS, response.data)
        });
    },

};
export const messsageAction = {
    getMessages({commit}) {
        commit(GET_MESSAGE);
        axios.get(`/message`)
            .then(response => {
                commit(GET_MESSAGE_SUCCESS, response.data.data[0].children);
            })
            .catch(err => {
                commit(GET_MESSAGE_FAILURE, err);
                console.log(err.message);
            });
    },
    sendMessage({commit}, payload) {
        commit(SEND_MESSAGE);
        axios.post(`/message`, payload)
            .then(response => {
                commit(SEND_MESSAGE_SUCCESS, response.data.data)
            })
            .catch(err => {
                commit(SEND_MESSAGE_FAILURE, err);
                console.log(err.message);
            });
    }
};

export const registrationActions = {
    register({commit}, user) {
        return new Promise((resolve, reject) => {
            commit(REGISTRATION);
            axios({url: `/auth`, data: user, method: 'POST'})
                .then(resp => {
                    const token = resp.data.token;
                    const user = resp.data.user;
                    localStorage.setItem('token', token);
                    axios.defaults.headers.common['Authorization'] = token;
                    commit(REGISTRATION_SUCCESS, token, user);
                    resolve(resp);
                })
                .catch(err => {
                    commit(LOGIN_ERROR, err);
                    localStorage.removeItem('token');
                    localStorage.removeItem('uuid');
                    localStorage.removeItem('uumail');
                    reject(err);
                });
        });
    }

};
 /* eslint-disable */
export const loginActions = {
    login({commit}, user) {
        return new Promise((resolve, reject) => {
            commit(LOGIN);
            axios.post(`/auth/login`, user)
                .then(resp => {

                    if (resp.data.accessToken != null) {
                        const token = resp.data.accessToken;
                        const user = resp.data.data;
                        localStorage.setItem('qAccessToken', token);
                        localStorage.setItem('uuid', user.id );
                        localStorage.setItem('uumail', user.email );
                        commit(LOGIN_SUCCESS, token, user);
                        resolve(resp)
                    }

                })
                .catch(err => {
                    commit(LOGIN_ERROR);
                    localStorage.removeItem('qAccessToken');
                    reject(err)
                })
        })
    },
    logout({commit}) {
        return new Promise((resolve, reject) => {
            commit(LOGOUT);
            localStorage.removeItem('qAccessToken');
            localStorage.removeItem('username');
            delete axios.defaults.headers.common['Authorization'];
            commit(LOGIN_SUCCESS);
            resolve();
        })
            .catch(err => {
                commit(LOGOUT_FAILED);
                localStorage.removeItem('qAccessToken');
                reject(err);
            });
    }
};
 /* eslint-enable */
