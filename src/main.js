import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import axios from 'axios';
import VueScrollTo from'vue-scrollto'
import VueSweetalert2 from "vue-sweetalert2";
import 'sweetalert2/dist/sweetalert2.min.css';
import vueVimeoPlayer from 'vue-vimeo-player'

Vue.config.productionTip = false;
Vue.use(VueScrollTo);
Vue.use(VueSweetalert2);
Vue.use(vueVimeoPlayer);

axios.defaults.baseURL='https://polet-advies.nl/api';
// axios.defaults.baseURL='http://poletnw.test/api';

new Vue({
  vuetify,
  router,
  store,
  axios,

  render: h => h(App)
}).$mount('#app');
