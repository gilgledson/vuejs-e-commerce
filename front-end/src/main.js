import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import vuetify from '@/plugins/vuetify'
import store from './store'
import router from './router'
Vue.config.productionTip = false
const baseURL = process.env.VUE_APP_URL;
window.baseURL = baseURL;
new Vue({
  vuetify,
  store,
  router,
  baseURL,
  render: h => h(App)
}).$mount('#app')
