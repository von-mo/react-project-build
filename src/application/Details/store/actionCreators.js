// 存放不同action的地方
// 如果需要请求获取内容，也放在此文件处理
// 此action执行之后，会把信息传到reducer中去

import { DETAIL_PLUS, DETAIL_MINUS } from "./constants"

export const getAddNum = (data) => {
  return {
    type: DETAIL_PLUS,
    data: data
  }
}

export const getMinusNum = (data) => {
  return {
    type: DETAIL_MINUS,
    data: data
  }
}