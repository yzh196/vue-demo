import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './axios'

Vue.config.productionTip = false

new Vue({
  data: function(){
    return {
      name: 'yzh'
    }
  },
  router,
  store,
  axios,
  render: h => h(App)
}).$mount('#app')
