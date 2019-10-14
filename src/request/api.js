import request from '.';

// eslint-disable-next-line import/prefer-default-export
export function login(params,data) {
  return request({
    // baseURL: 'https://www.easy-mock.com/mock/5a98c04628e12f3fbc3fd21a/xinedai',
    url: '/api/login',//接口名称
    method: 'get',
    params,
    data
  })
}
