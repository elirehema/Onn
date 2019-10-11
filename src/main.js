/*jshint esversion: 6 */

import Vue from 'vue';
import router from './router';
import store from './store';
import App from './App';
import moment from 'moment';
import VueAxios from 'vue-axios';
import axios from './config/axios-config';
import vuetify from '@/plugins/vuetify';
import i18n from './plugins/i18n';
import VueBootstrap from 'bootstrap-vue';
import * as d3 from 'd3';


import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';


Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(String(value)).format('MMMM Do YYYY, h:mm:ss a');
  }
});

Vue.prototype.$http = axios;
const token = localStorage.getItem('token');
if (token){
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token;
}

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
Vue.use(VueBootstrap);
Vue.use(vuetify);


new Vue({
  i18n,
  render: h => h(App),
  router,
  store,
  components: { App },
  vuetify,
  template: '<App/>'
}).$mount('#app');