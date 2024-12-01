import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import vmask from './plugins/vmask'
import toast from './plugins/toast';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  vmask,
  toast,
  render: h => h(App)
}).$mount('#app')
