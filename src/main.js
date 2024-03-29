import Vue from "vue";
import App from "./App";
import router from "./router";
import VueYoutube from 'vue-youtube'
// import store from './store'
// import { sync } from 'vuex-router-sync'

import "./plugins";
import "./utils";
import "./directives";

import config from "./config";

// sync(store, router)

Vue.use(VueYoutube)

Vue.config.productionTip = false;

new Vue({
  el: "#site",
  name: config.site.name,
  // store,
  router,
  render: h => h(App)
});
