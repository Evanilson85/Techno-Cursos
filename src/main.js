import Vue from 'vue'
import App from './App.vue'
import router from './router'
import PageLoad from "@/components/PageLoad"

Vue.config.productionTip = false

Vue.component("PageLoad", PageLoad); // componete global

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
