import { defineStore } from "pinia"

import store from "@/store"
import { getToken, clearLoginData, saveLoginData } from "@/utils/storage"
import { getUserInfo } from "@/services/user"
import { resetRouter } from "@/router"

import { login } from "@/services/user"

type AppState = {
  token: string | null
  loading: boolean
  userInfo: any
}

const useAppStore = defineStore({
  id: "app",
  state: (): AppState => ({
    token: getToken(),
    loading: false,
    userInfo: null,
  }),
  getters: {
    getterToken(): string | null {
      return this.token
    },
    getterUserInfo(): any {
      return this.userInfo
    },
  },
  actions: {
    toggleLoading(status: boolean) {
      this.loading = status
    },
    async getUserInfo(params?: Recordable<any>) {
      const userInfo = await getUserInfo(params)
      this.userInfo = userInfo
      // TODO: dynamic update routes

      return userInfo
    },
    async login(params) {
      const data = (await login(params)) as any
      saveLoginData(data.token)
      this.token = data.token
      await this.getUserInfo(data)
    },
    async logout() {
      clearLoginData()
      resetRouter()
    },
  },
})

export default useAppStore

// Need to be used outside the setup
export function useAppStoreWithOut() {
  return useAppStore(store)
}
