import axios from 'axios';
import NProgress from 'nprogress';
import { message } from 'antd';
import * as CONST from '@constants';
import whitelist from './whitelist';

export default async function request(options) {
  const service = axios.create({
    // baseURL: 'https://...'
  });

  // 请求拦截器
  service.interceptors.request.use(
    config => {
      NProgress.start();
      return config;
    },
    error => {
      return Promise.reject(error);
    },
  );

  // 返回拦截器
  service.interceptors.response.use(
    response => {
      NProgress.done();
      console.log('response', response);

      const { content, result, errorMsg, errorCode } = response.data;
      const { config } = response;
      const url = config.url;
      const apiPass = whitelist.indexOf(url) !== -1;

      if (result !== CONST.requestSuccess) {
        if (errorCode === CONST.requestCode.sso) {
          // sessionKey 过期
          // 抛错误信息
          message.error(errorMsg);
          // 重置登录状态
          // 清空 cookies
          // 跳转登录站点
          // setTimeout(() => {
          //   store.dispatch(
          //     {
          //     type: 'verifySessionKey/unVerify',
          //   }
          //   );
          // }, 2000);
          return;
        }
        // 是白名单接口
        if (apiPass) {
          return response.data;
        }
        message.error(errorMsg);
        return response.data;
      }
      return response.data;
    },
    error => {
      NProgress.done();
      message.error(error.msg);
      return Promise.reject(error);
    },
  );

  let response;
  try {
    response = await service(options);
    return response;
  } catch (err) {
    return response;
  }
}
