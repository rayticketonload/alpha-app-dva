// 接口请求结果
export const requestSuccess = 'success';
export const requestError = 'error';
// 接口请求返回 code 的意思
export const requestCode = {
  sso: 'SSO00000001', // 单点登录
};
// 接口链接
export const API = {
  verifySessionKey: '/api/verifySessionKey', // 验证 session key
  testGetList: '/api/testGetList', // 测试
};
// 单点登录 cookie key 名字
export const SSO_KEY_NAME = 'sessionId';
