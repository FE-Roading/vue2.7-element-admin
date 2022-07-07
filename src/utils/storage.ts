const Storage = localStorage
const TokenKey = "CustomTokenKey"

export function saveLoginData(token: string) {
  Storage.setItem(TokenKey, token)
}

export function getToken(): string | null {
  return Storage.getItem(TokenKey)
}

export function clearLoginData() {
  Storage.clear()
}
