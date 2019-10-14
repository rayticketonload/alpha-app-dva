import axios from 'axios';
import NProgress from 'nprogress';

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
      return response;
    },
    error => {
      NProgress.done();
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
