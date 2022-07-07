import { Message } from "element-ui"

const errorCode = {
  c401: 401,
  c403: 403,
}
const successCode = {
  c100200: 100200,
  c100999: 100999,
}
const errorMsg = "报告！服务器出了点小问题，稍后再试试..."

function handleCommonError(code: number, config: any) {
  switch (code) {
    case errorCode.c401: {
      localStorage.clear() // 重新登录
      Message.error("您没有登录或者登录已经失效！")
      setTimeout(() => window.location.replace("/login"), 1500)
      break
    }
    default: {
      if (!config.noErrorTip) {
        handleNoCommonError(errorMsg)
      }
    }
  }
}
function handleNoCommonError(err: any) {
  if (!err) {
    Message.error(errorMsg)
  } else if (err.errorItems && err.errorItems.length > 0 && err.errorItems[0].Message) {
    Message.error(err.errorItems[0].Message)
  } else if (err.Message) {
    Message.error(err.Message)
  } else {
    Message.error(err)
  }
}
export { handleCommonError, handleNoCommonError, errorMsg, errorCode, successCode }
