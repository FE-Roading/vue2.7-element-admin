/* eslint-disable */
import Vue from "vue"
import Router from "vue-router";
import { PiniaVuePlugin } from 'pinia'
import ElementUI from "element-ui"

import "normalize.css/normalize.css" // A modern alternative to CSS resets
import "./styles/index.scss"

import router from "./router"  // <--- export default new Router(...)

Vue.use(ElementUI, { size: 'small' })
Vue.use(PiniaVuePlugin)
import pinia from "./store"

Vue.use(Router)  // <--- MUST BE AFTER Vue.use(PiniaVuePlugin)

import "@/icons"
import App from "./App.vue"
import "./permission"

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

Vue.config.productionTip = false

new Vue({
  el: "#app",
  render: (h) => h(App),
  router,
  pinia
})
