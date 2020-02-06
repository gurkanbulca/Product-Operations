import Vue from 'vue'
import App from './App.vue'
import { router } from "./routes.js";
import VueResource from 'vue-resource'
import {store} from "./store/store"
import VModal from 'vue-js-modal'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.use(VModal)
Vue.use(VueResource)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.http.options.root = 'https://urun-islemleri-a5377.firebaseio.com';

store.dispatch('initApp');

Vue.filter('currency',(value)=>{
  return parseFloat(value).toLocaleString('tr-TR',{minimumFractionDigits : 2}) + '₺'
})

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
