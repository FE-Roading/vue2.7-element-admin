import router from "./router"
import { useAppStoreWithOut } from "./store/app"
import { Message } from "element-ui"
import NProgress from "nprogress" // progress bar
import "nprogress/nprogress.css" // progress bar style

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ["/login"] // no redirect whitelist

router.beforeEach(async (to, from, next) => {
  const { getterUserInfo, getterToken, getUserInfo, logout } = useAppStoreWithOut()

  // start progress bar
  NProgress.start()

  // determine whether the user has logged in
  const hasToken = !!getterToken

  if (hasToken) {
    if (to.path === "/login") {
      // if is logged in, redirect to the home page
      next({ path: "/" })
      NProgress.done()
    } else {
      const hasGetUserInfo = !!getterUserInfo
      if (hasGetUserInfo) {
        next()
      } else {
        try {
          // get user info
          await getUserInfo()

          next()
        } catch (error) {
          // remove token and go to login page to re-login
          await logout()
          Message.error((error || "Has Error") as any)
          next(`/login?redirect=${to.path}`)
          NProgress.done()
        }
      }
    }
  } else {
    /* has no token*/

    if (whiteList.indexOf(to.path) !== -1) {
      // in the free login whitelist, go directly
      next()
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
