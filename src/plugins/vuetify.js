// src/plugins/vuetify.js

import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import 'vuetify/dist/vuetify.min.css';
import '@mdi/font/css/materialdesignicons.css';
import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);


const vuetify = new Vuetify({
  theme: {
    themes: {
      /*options: {
        minifyTheme: function (css) {
          return process.env.NODE_ENV === 'production' ? css.replace(/[\r\n|\r|\n]/g, ''):css;
        },*/
      light: {
        primary: colors.purple,
        secondary: colors.grey.darken1,
        accent: colors.shades.black,
        error: colors.red.accent3,
        anchor: '#8c9eff',
      },
      dark: {
        primary: colors.blue.lighten3,
      },
    },
  },
});
export default vuetify;
