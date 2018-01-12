import Vue from 'vue'
import FastClick from 'fastclick'
// import VueResource from 'vue-resource'
import App from './App'
import router from './router/index.js'
// Vue.use(VueResource);
FastClick.attach(document.body)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
