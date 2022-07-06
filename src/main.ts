import Vue from "vue"
import App from "./App.vue"

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
}).$mount("#app")

window.__APP_INFO__ = __APP_INFO__
