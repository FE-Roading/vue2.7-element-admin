import { getToken } from "./storage"

export function getLoginStatus() {
  return !!getToken()
}
