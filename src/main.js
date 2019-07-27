import Vue from 'vue';

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'

Vue.use(VueMaterial)
Vue.config.productionTip = false

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);

import App from './App.vue';
import CreateItem from './components/CreateItem.vue';
import DisplayUsers from './components/DisplayUsers.vue';
import EditUser from './components/EditUser.vue';
import CreateUserComponent from './components/CreateUser.vue';

const routes = [
    {
        name: 'CreateItem',
        path: '/create/item',
        component: CreateItem
    },
    {
        name: 'DisplayUsers',
        path: '/',
        component: DisplayUsers
    },
    {
        name: 'EditUser',
        path: '/user/:id',
        component: EditUser
    },
    {
        name: 'CreateUser',
        path: '/create/user',
        component : CreateUserComponent
    }
];

const router = new VueRouter({ mode: 'history', routes: routes });
new Vue(Vue.util.extend({ router }, App)).$mount('#app');