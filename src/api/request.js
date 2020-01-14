/**
 * 请求API 接口
 * @example 
 * ```js
 * const data = {};// 此处为查询参数 Object类型 
 * getBannerRequest(data).then(xx => todo).catch(xx => todo)
 * ```
 */
import { axiosInstance } from './axios';
import qs from 'qs';

// 获取banner图列表
export const getBannerRequest = () => {
  return axiosInstance.get("/banner");
};