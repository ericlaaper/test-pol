import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import axios from 'axios'
import VuePlyr from 'vue-plyr'
import 'vue-plyr/dist/vue-plyr.css'
import VueSweetalert2 from "vue-sweetalert2";


Vue.config.productionTip = false;
Vue.use(VuePlyr);
Vue.use(VueSweetalert2);

axios.defaults.baseURL='https://ta-tools.nl/api';


new Vue({
  router,
  store,
  axios,

  render: h => h(App)
}).$mount('#app');
