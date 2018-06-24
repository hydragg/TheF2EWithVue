import Vue from "vue";
import App from "./App.vue";
import { router } from "./router";
import store from "./store";
// for IE
import "babel-polyfill";
// plugin
// iView
import iView from "iview";
import locale from "iview/dist/locale/zh-TW";
import "iview/dist/styles/iview.css";
// font-awesome
import fontawesome from "@fortawesome/fontawesome";
import FontAwesomeIcon from "@fortawesome/vue-fontawesome";
import solid from "@fortawesome/fontawesome-free-solid";
import regular from "@fortawesome/fontawesome-free-regular";
import brands from "@fortawesome/fontawesome-free-brands";

Vue.config.productionTip = false;

Vue.use(iView, { locale });

fontawesome.library.add(solid);
fontawesome.library.add(regular);
fontawesome.library.add(brands);

Vue.component("font-awesome-icon", FontAwesomeIcon);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
