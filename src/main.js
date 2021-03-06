/*jshint esversion: 6 */
/*jshint sub:true*/

import Vue from 'vue';
import router from './router';
import store from './store';
import App from './App';
import moment from 'moment';
import VueAxios from 'vue-axios';
import axios from './config/axios-config';
import vuetify from '@/plugins/vuetify';
import VueCookies from 'vue-cookies';
import i18n from '@/plugins/i18n';
import FlagIcon from 'vue-flag-icon';
Vue.use(VueCookies);
Vue.use(FlagIcon);
// set default config
VueCookies.config('7d');

// set global cookie
VueCookies.set('theme','default');
VueCookies.set('hover-time','1s');
import 'material-design-icons-iconfont/dist/material-design-icons.css';


Vue.config.performance = true;
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
Vue.use(vuetify);


//Root Instance 
new Vue({
  i18n,
  render: h => h(App),
  router,
  /**
   * provide the store using ther "store" option
   * this will injetc the store instance to all child components. 
   **/
  store,
  components: { App },
  vuetify,
  template: '<App/>'
}).$mount('#app');