import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);

Vue.http.options.root = 'https://vuejs-vueresource-61b27.firebaseio.com/users.json';  //vueResource (end point) nin global olarak tanımlanması

new Vue({
  el: '#app',
  render: h => h(App)
})
