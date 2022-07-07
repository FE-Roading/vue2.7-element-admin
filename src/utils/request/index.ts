import axios, { AxiosRequestConfig } from "axios"
import qs from "qs"

import { URL_PREFIX, AUTHORIZATION_REQUEST_KEY } from "@/configs"
import {
  errorCode,
  errorMsg,
  handleCommonError,
  handleNoCommonError,
  successCode,
} from "./errorHandle"
import { getToken } from "../storage"

export type requestOptions = AxiosRequestConfig & {
  url: string
  // noLoading?: boolean
  headers?: any
  noErrorTip?: boolean
}

// 拦截器
axios.interceptors.response.use(
  // 响应拦截
  (response: any) => {
    const { data } = response
    if (data.code === successCode.c100999) {
      handleNoCommonError(data)
      return Promise.reject(errorMsg)
    }
    return data.data
  },
  // 错误拦截
  (error) => {
    const { response } = error
    // 请求有响应
    if (response) {
      const { status, data, config } = response
      const { message, detail } = data

      if (config.noErrorTip) {
        return Promise.reject(message || detail)
      }

      if (status === errorCode.c401) {
        handleCommonError(status, config)
        return Promise.reject(message)
      } else if (status === errorCode.c403) {
        handleNoCommonError("您没有对应权限！")
        return Promise.reject("您没有对应权限！")
      }
      handleNoCommonError(errorMsg)
      return Promise.reject(errorMsg)
    }
    // 请求超时
    if (error.code === 408) {
      const timeoutMsg = "请求超时，请稍后再试"
      handleNoCommonError(timeoutMsg)
      return Promise.reject(timeoutMsg)
    }
    const networkErrorMsg = "您的网络出现问题，请检查网络重试"
    handleNoCommonError(networkErrorMsg)
    return Promise.reject(networkErrorMsg)
  },
)

// request
export default async function request(options: requestOptions) {
  const { url } = options

  const token = getToken()
  let headers: Record<string, any> = {}
  if (options) {
    headers = options.headers || {}
  }
  if (token) {
    headers[AUTHORIZATION_REQUEST_KEY] = `JWT ${token}`
  }
  const defaultOptions = {
    headers: {
      ...headers,
    },
    credentials: "include",
    timeout: 10000,
    withCredentials: true,
    validateStatus(status: any) {
      return status >= 200 && status < 300
    },
  }
  if (options) {
    delete options.headers
  }
  const newOptions: requestOptions = { ...defaultOptions, ...options }

  if (newOptions.method === "get") {
    newOptions.paramsSerializer = (params) => {
      return qs.stringify(params, { arrayFormat: "repeat" })
    }
  }
  const newUrl = URL_PREFIX + url

  return axios(newUrl, newOptions)
}
