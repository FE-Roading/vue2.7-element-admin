import Vue from "vue"
import Router from "vue-router"

Vue.use(Router)

export const constantRoutes = [
  {
    path: "/",
    component: () => import("@/pages/dashboard/index.vue"),
    hidden: true,
  },
]

const createRouter = () =>
  new Router({
    mode: "history",
    // @ts-ignore: x is no need to reset
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes,
  })

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  // @ts-ignore: reset router
  router.matcher = newRouter.matcher
}

export default router
