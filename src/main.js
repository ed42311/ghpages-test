import '../node_modules/vuetify/dist/vuetify.min.css'
import 'font-awesome/css/font-awesome.min.css'
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'

Vue.config.productionTip = false
Vue.use(Vuetify, {
  iconfont: 'fa4'
})
/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");