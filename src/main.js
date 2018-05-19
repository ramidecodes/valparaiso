import Vue from "vue";
import App from "./App";
import router from "./router";
import VueYouTubeEmbed from 'vue-youtube-embed';
// import store from './store'
// import { sync } from 'vuex-router-sync'

import "./plugins";
import "./utils";
import "./directives";

import config from "./config";

// sync(store, router)

Vue.use(VueYouTubeEmbed, { global: false });

Vue.config.productionTip = false;

new Vue({
  el: "#site",
  name: config.site.name,
  // store,
  router,
  render: h => h(App)
});
