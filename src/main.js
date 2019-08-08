import Vue from 'vue';
import router from './router'
import store from './store'
import App from './App';
import moment from 'moment';
import VueAxios from 'vue-axios';
import axios from 'axios';
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import vuetify from './plugins/vuetify';


Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(String(value)).format('MMMM Do YYYY, h:mm:ss a')
  }
});

Vue.use(VueMaterial);
Vue.config.productionTip = false;
Vue.use(VueAxios, axios);


new Vue({
  render: h => h(App),
  router,
  store,
  components: { App },
  vuetify,
  template: '<App/>'
}).$mount('#app');