import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import axios from 'axios'
import router from './router'
import VuePlyr from 'vue-plyr'
import store from './store'
import vuetify from './plugins/vuetify';
import VueSweetalert2 from "vue-sweetalert2";
import VueScrollTo from'vue-scrollto'
import 'sweetalert2/dist/sweetalert2.min.css';


Vue.config.productionTip = false;
Vue.use(VueSweetalert2);
Vue.use(VueScrollTo);
Vue.use(VuePlyr);

axios.defaults.baseURL='https://polet-advies.nl/api';

new Vue({
  router,
  store,
  vuetify,
  axios,

  render: h => h(App)
}).$mount('#app');
