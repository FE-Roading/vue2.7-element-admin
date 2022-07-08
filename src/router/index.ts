import Router from "vue-router"

import Layout from "@/layout/index.vue"
import Dashboard from "@/pages/dashboard/index.vue"

export const constantRoutes = [
  {
    path: "/login",
    component: () => import("@/pages/login/index.vue"),
    hidden: true,
  },

  {
    path: "/",
    component: Layout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: Dashboard,
        meta: { title: "Dashboard", icon: "dashboard" },
      },
    ],
  },

  {
    path: "/nested",
    component: Layout,
    redirect: "/nested/menu1",
    name: "Nested",
    meta: {
      title: "Nested",
      icon: "nested",
    },
    children: [
      {
        path: "menu1",
        component: Dashboard, // Parent router-view
        name: "Menu1",
        meta: { title: "Menu1" },
        children: [
          {
            path: "menu1-1",
            component: Dashboard,
            name: "Menu1-1",
            meta: { title: "Menu1-1" },
          },
          {
            path: "menu1-2",
            component: Dashboard,
            name: "Menu1-2",
            meta: { title: "Menu1-2" },
            children: [
              {
                path: "menu1-2-1",
                component: Dashboard,
                name: "Menu1-2-1",
                meta: { title: "Menu1-2-1" },
              },
              {
                path: "menu1-2-2",
                component: Dashboard,
                name: "Menu1-2-2",
                meta: { title: "Menu1-2-2" },
              },
            ],
          },
          {
            path: "menu1-3",
            component: Dashboard,
            name: "Menu1-3",
            meta: { title: "Menu1-3" },
          },
        ],
      },
      {
        path: "menu2",
        component: Dashboard,
        name: "Menu2",
        meta: { title: "menu2" },
      },
    ],
  },

  {
    path: "external-link",
    component: Layout,
    children: [
      {
        path: "https://panjiachen.github.io/vue-element-admin-site/#/",
        meta: { title: "External Link", icon: "link" },
      },
    ],
  },

  {
    path: "/404",
    component: () => import("@/pages/404.vue"),
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
