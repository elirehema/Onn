import axios from '../config/axios-config';
import * as mutations from './mutation-types';
/*jshint sub:true*/
export const productActions = {
    allProducts({commit}) {
        commit(mutations.ALL_PRODUCTS);
        axios.get(`/products`).then(response => {
            commit(mutations.ALL_PRODUCTS_SUCCESS, response.data.data);
        });
    },
    productById({commit}, payload) {
        commit(mutations.PRODUCT_BY_ID);
        axios.get(`/products/${payload}`).then(response =>
            commit(mutations.PRODUCT_BY_ID_SUCCESS, response.data));
    },
    addProduct({commit}, payload) {
        commit(mutations.ADD_PRODUCT);
        axios.post(`/products`, payload).then(response => {
            commit(mutations.ADD_PRODUCT_SUCCESS, response.data);
        });
    },
    updateProduct({commit}, payload) {
        commit(mutations.UPDATE_PRODUCT);
        axios.put(`/products/${payload._id}`, payload).then(response => {
            commit(mutations.UPDATE_PRODUCT_SUCCESS, response.data);
        });
    },
    deleteProduct({commit}, payload) {
        commit(mutations.DELETE_PRODUCT);
        axios.delete(`/products/${payload}`, payload).then(response => {
            commit(mutations.DELETE_PRODUCT_SUCCESS, response.data);
        });
    }
};

export const manufacturerActions = {
    allManufacturers({commit}) {
        commit(mutations.ALL_MANUFACTURERS);
        axios.get(`/manufacturers`).then(response => {
            commit(mutations.ALL_MANUFACTURERS_SUCCESS, response.data);
        });
    }
};
export const userActions = {
    allUsers({commit}) {
        commit(mutations.ALL_USERS);
        axios.get(`/users`).then(response => {

            commit(mutations.ALL_USERS_SUCCESS, response.data.data);
        });
    },

    deleteUser({commit}, payload) {
        commit(mutations.DELETE_USER);
        axios.delete(`/users/${payload}`).then(response => {
            commit(mutations.DELETE_USER_SUCCESS, response.data);
        });
    },
    currentProfile({commit}, payload){
        commit(mutations.USER_PROFILE);
        axios.get(`/users/${payload}`)
        .then(response => {
            commit(mutations.USER_PROFILE_SUCCESS, response.data.data);
        })
        .catch(function (error) {
            commit(mutations.USER_PROFILE_FAILURE);
            console.log(error.message);
          });
    },
    updateprofile({commit}, payload){
        commit(mutations.UPDATE_PROFILE);
        axios.put(`/users/${payload.id}`)
        .then(response => {
            commit(mutations.UPDATE_PROFILE_SUCCESS, response.data.data);
        })
        .catch(err => {
            commit(mutations.UPDATE_PROFILE_FAILURE, err);
            console.log(err.message);
        });
    },
    addUser({commit}, payload) {
        commit(mutations.ADD_USER);
        axios.post(`/users`, payload).then(response => {
            commit(mutations.ADD_USER_SUCCESS, response.data)
        });
    },

};
export const messsageAction = {
    getMessages({commit}) {
        commit(mutations.GET_MESSAGE);
        axios.get(`/message`)
            .then(response => {
                commit(mutations.GET_MESSAGE_SUCCESS, response.data.data[0].children);
            })
            .catch(err => {
                commit(mutations.GET_MESSAGE_FAILURE, err);
                console.log(err.message);
            });
    },
    sendMessage({commit}, payload) {
        commit(mutations.SEND_MESSAGE);
        axios.post(`/message`, payload)
            .then(response => {
                commit(mutations.SEND_MESSAGE_SUCCESS, response.data.data)
            })
            .catch(err => {
                commit(mutations.SEND_MESSAGE_FAILURE, err);
                console.log(err.message);
            });
    }
};

export const registrationActions = {
    register({commit}, user) {
        return new Promise((resolve, reject) => {
            commit(mutations.REGISTRATION);
            axios({url: `/auth`, data: user, method: 'POST'})
                .then(resp => {
                    const token = resp.data.token;
                    const user = resp.data.user;
                    localStorage.setItem('token', token);
                    axios.defaults.headers.common['Authorization'] = token;
                    commit(mutations.REGISTRATION_SUCCESS, token, user);
                    resolve(resp);
                })
                .catch(err => {
                    commit(mutations.LOGIN_ERROR, err);
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
            commit(mutations.LOGIN);
            axios.post(`/auth/login`, user)
                .then(resp => {

                    if (resp.data.accessToken != null) {
                        const token = resp.data.accessToken;
                        const user = resp.data.data;
                        localStorage.setItem('qAccessToken', token);
                        localStorage.setItem('uuid', user.id );
                        localStorage.setItem('uumail', user.email );
                        commit(mutations.LOGIN_SUCCESS, token, user);
                        resolve(resp);
                    }

                })
                .catch(err => {
                    commit(mutations.LOGIN_ERROR);
                    localStorage.removeItem('qAccessToken');
                    reject(err);
                });
        });
    },
    logout({commit}) {
        return new Promise((resolve, reject) => {
            commit(mutations.LOGOUT);
            localStorage.removeItem('qAccessToken');
            localStorage.removeItem('username');
            delete axios.defaults.headers.common['Authorization'];
            commit(mutations.LOGIN_SUCCESS);
            resolve();
        })
            .catch(err => {
                commit(mutations.LOGOUT_FAILED);
                localStorage.removeItem('qAccessToken');
                reject(err);
            });
    }
};
 /* eslint-enable */
