// src/plugins/vuetify.js

import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify);

const etify  = new Vuetify({
  theme:{
    dark: false
  },
  icons: {
    iconfont: 'mdi',
  }

});
export default etify;

