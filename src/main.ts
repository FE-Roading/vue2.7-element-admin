/* eslint-disable */
import Vue from "vue"
import ElementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css"
import "normalize.css/normalize.css" // A modern alternative to CSS resets

import router from "./router"
import App from "./App.vue"

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
 if (process.env.NODE_ENV !== 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
}

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  el: "#app",
  render: (h) => h(App),
  router
})
