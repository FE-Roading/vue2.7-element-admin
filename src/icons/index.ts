import Vue from "vue"
import SvgIcon from "@/components/SvgIcon/index.vue" // svg component

// register globally
Vue.component("svg-icon", SvgIcon)

const req = require.context("./svg", false, /\.svg$/)
// @ts-ignore: This is webpack load config
const requireAll = (requireContext) => requireContext.keys().map(requireContext)
requireAll(req)
