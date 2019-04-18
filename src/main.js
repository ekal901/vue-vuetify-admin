import Vue from 'vue'
// import './plugins/vuetify'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import VeeValidate from 'vee-validate'

import App from './App.vue'
import router from './router/index'
import store from './store'

Vue.use(Vuetify)
Vue.use(VeeValidate)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
