import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import "bootstrap";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
import "./bus";
import currencyFilter from "./filters/currency";

import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
// Vue.use(Bootstrap);
Vue.component("Loading", Loading);
Vue.filter("currency", currencyFilter);
axios.defaults.withCredentials = true;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
