import request from '.';
import * as CONST from '@constants';

// auth
// eslint-disable-next-line import/prefer-default-export
export function login(params,data) {
  return request({
    // baseURL: 'https://www.easy-mock.com/mock/5a98c04628e12f3fbc3fd21a/xinedai',
    url: '/api/login',
    method: 'get',
    params,
    data
  })
}

export function verifySessionKey(params,data) {
  return request({
    url: CONST.API.verifySessionKey,
    method: 'get',
    params,
    data
  })
}

// mock test
export function testGetList(params,data) {
  return request({
    url: CONST.API.testGetList,
    method: 'get',
    params,
    data
  })
}


