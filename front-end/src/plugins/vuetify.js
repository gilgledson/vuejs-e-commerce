
import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'
import { VueMaskDirective } from 'v-mask'
import colors from 'vuetify/lib/util/colors'


Vue.directive('mask', VueMaskDirective);
Vue.filter('toCurrency', function (value) {
    if (typeof value !== "number") {
        return value;
    }
    var formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2
    });
    return formatter.format(value);
});

Vue.use(Vuetify)

const opts = {
    theme: {
      themes: {
        light: {
          primary: "#cc0d1f",
          secondary: colors.grey.darken1,
          accent: colors.shades.black,
          error: colors.red.accent3,
          background: colors.indigo.lighten5,
        },
        dark: {
          primary: "#cc0d1f", 
          background: colors.indigo.base,
        },
      },
    },
}
  

export default new Vuetify(opts)
