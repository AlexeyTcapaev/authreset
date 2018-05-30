import Vue from "vue";
import Vuex from "vuex";
import VueRouter from "vue-router";
import VueResource from "vue-resource";
import App from "./App.vue";


Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(Vuex);

import Registration from "./Registration"
const routes = [{
  name: "main",
  path: "/",
  component: Registration
}
];
export const router = new VueRouter({
routes,
mode: "history"
});


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
