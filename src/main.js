import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueTypedJs from "vue-typed-js";
import VueTyper from "vue-typer";

Vue.use(VueTypedJs);
Vue.use(VueTyper);
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
